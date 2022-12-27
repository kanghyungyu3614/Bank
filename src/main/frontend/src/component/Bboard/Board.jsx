import React , { useState , useEffect } from 'react';
import axios from "axios";
import Pagination from 'react-js-pagination'
import { useParams , Link } from "react-router-dom";


import styles from './board.css'

export default function Board( ) {

    const params = useParams();
  //1. 메모리
   const [ pageInfo , setPageInfo ] = useState({ page:1 }) // 1. 요청 정보 객체 state
   const [ pageDto , setPageDto ] = useState( [ { totalBoards : 0}] )          // 1. 게시물 리스트 state
   const [ login , setLogin ] = useState( { } ); //


    console.log( pageDto)

    // 2. 서버로부터  pageInfo  요청 ==> 페이지 응답  [  실행 조건 : 1. 랜더링 될때   2. 페이징 선택 ]
         function getboardlist(){
                  axios   .get ( "/blist" , { params : { page: pageInfo.page } } )
                          .then( res => {  console.log( res.data );  setPageDto( res.data );  } )
                          .catch( err => { console.log( err ); } )
              }

      useEffect( getboardlist , [ pageInfo ] )  // 3. 렌더링 될때 그리고 * pageInfo 변경될때 마다

      useEffect( // 2. 서버로 부터 해당 로그인된 회원의 아이디 정보
               ()=>axios.get("/member/getloginMno" ).then( res => { setLogin( res.data); console.log( "로그인계정" + res.data )}) ,[] )



     /*----------------------------3. 페이징 --------------------------*/
        const onPage = ( page ) => {   setPageInfo ( { page : page} )}
    /*--------------------------------------- --------------------------*/
        const loadView = ( bno) => {
            alert(" click " + bno );
              axios .get( "/count" , { params : { bno : bno } } )
                    .then( res => {  console.log( res.data ); } )
                    .catch( err => { console.log( err ); } )

              window.location.href ='/Bboard/BoardView/'+ bno;

            }


        return(
                    <div className = "mbox">
                               <div className ="notice"> <h4> 공지사항</h4> </div>
                                    <table className = "table table-hover" >
                                         <tr className="nbox"><th> 번호 </th> <th>제목</th> <th>작성 날짜</th> <th>조회수</th> </tr>
                                   {
                                         pageDto.map( (b) => {
                                                      return(
                                                      <tbody>
                                                         <tr>
                                                            <td> {b.bno} </td>
                                                            <td onClick = {() => loadView(b.bno) }> {b.btitle} </td>
                                                            <td> {b.bdate} </td>
                                                            <td> {b.bview} </td>
                                                        </tr>
                                                        </tbody>
                                                      )
                                                  })
                                     }

                                      </table>

                              <Pagination
                                             activePage={ pageInfo.page  }
                                             itemsCountPerPage = { 4 }
                                             totalItemsCount = { pageDto[0].totalBoards }
                                             pageRangeDisplayed = { 5 }
                                             onChange= { onPage }
                                              prevPageText="‹"
                                              nextPageText="›"

                                          />


                          {  login == "adminLogin" && <button type="button" className="btnd"><a className="btn-default"  href="/Bboard/BoardWrite">글등록 </a></button> }

                   </div>


        );

}