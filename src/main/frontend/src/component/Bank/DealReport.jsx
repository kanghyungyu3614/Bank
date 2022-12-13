import React, { useState, useEffect, useRef } from 'react';
import '../css/DealReport.css'
import { useNavigate } from 'react-router-dom'; // 설치한 패키지// 참고 : 6버전에서 useNavigate로 변경되었다.
import axios from 'axios';
import DealListComponent from './DealReportComponent/DealListComponent';
import Pagination from 'react-js-pagination' // npm i react-js-pagination 설치

/*강현규 2022-12-12 admin에서의 user들의 거래내역 출력*/
export default function DealReport (){

    const [ pageInfo , setPageInfo ] = useState({ bcno : 0 , page : 1 , key : "" , keyword:""  }) // 1. 요청 정보 객체 state
    const [ pageDto , setPageDto ] = useState( { list : [] } )// 1. 게시물 리스트 state
    const [ bcategory , setBcategoryList ] = useState( [ ] )// 1. 카테고리 리스트
    // [ ] : array/list     {  } : object/dto
    // ------------------------------  1. 게시물  -------------------------------------- //
    function getboardlist( ){ // 2. server : pageInfo 요청 => pageDto 응답 [ 실행조건 : 1. 렌더링될때 2.검색할때 3.카테고리선택 4.페이징 선택  ---> 일반 함수화 ]
        axios.post( "/bank/dealReport/boardlist" ,  pageInfo )
             .then( res => {  console.log( res.data );  setPageDto( res.data );  } ).catch( err => { console.log( err ); } )
    }
    useEffect( getboardlist , [ pageInfo ] )  // 3. 렌더링 될때 그리고 *** pageInfo 변경될때 마다
     // 카테고리 버튼을 선택했을때
     const onCategory = ( bcno ) =>{ setPageInfo( { bcno : bcno , page : 1 , key : "" , keyword:""  } )  }
     // ------------------------------ --------------------------------------------------- //
        // ------------------------------  3.페이징  -------------------------------------- //
        const onPage = ( page ) =>{
            setPageInfo(
                {   bcno : pageInfo.bcno ,          // 기존 카테고리
                    page : page ,
                    key : pageInfo.key ,            // 기존 검색 필드명
                    keyword : pageInfo.keyword  }   // 기존 검색할 단어
            )
        }
        // ------------------------------ --------------------------------------------------- //
        // ------------------------------  4. 검색   -------------------------------------- //
        const onSearch = () => {
            setPageInfo(
                {   bcno : pageInfo.bcno ,  // 카테고리 번호 [ 기존 그대로 : pageInfo.bcno ]
                    page : 1 ,              // 검색시 첫페이지부터 보여주기 [ 1 ]
                    key : document.querySelector('.key').value ,    // 검색할 필드명
                    keyword: document.querySelector('.keyword').value  } // 검색할 단어
            )
        }

         const [ dealReportMainData , setDealReportMainData] = useState([])
         useEffect(()=>{
         axios.get( "http://localhost:8080/bank/dealReport") // 요청
                      .then( res => {
                              console.log("res.data는?" + res.data);
                              console.log(res.data);
                              setDealReportMainData([...res.data])
                              console.log("axios안의 dealReportMainData");
                              console.log(dealReportMainData);
             })// 응답
         axios.post("http://localhost:8080/bank/dealReport")


         },[])
         console.log("axios밖의 dealReportMainData");
         console.log(dealReportMainData);
         return(
             <div className="dealReport">
              <div className="bcategorybox">
              <button type="button" onClick = { ()=> onCategory( 0 ) }> 전체보기 </button>
              {
                  bcategory.map( (c) => {
                      return (
                          <button type="button" onClick = { ()=> onCategory( c.bcno ) }>{c.bcname}</button>
                      )
                  })
              }
              </div>
              <table className="btable">
                             {
                                 pageDto.list.map( ( b ) => {
                                     return (
                                         <tr>
                                             <td> { b.bno } </td>
                                             <td> { b.btitle } </td>
                                             <td> { b.memail } </td>
                                             <td> { b.bdate } </td>
                                             <td> { b.bview } </td>
                                         </tr>
                                     )
                                 } )
                             }
               </table>
             <div className="dealReportComtent">
                 <div className="ContentText searchBox">
                     <span className="userNameOutput">모든 고객</span>
                     <span className="DefaultUserName">님의 거래내역</span>
                     <select className="key">
                         <option value="btitle">제목</option>
                         <option value="bcontent">내용</option>
                     </select>
                     <input type="text" className="userNameinput keyword" placeholder="고객님의 이름을 적어주세요."/>
                     <button type="button" className="userNameButton" onClick={ onSearch }>검색</button>
                 </div>
             </div>
             <DealListComponent props={dealReportMainData}/>
               <Pagination
                      activePage={ pageInfo.page  }
                      itemsCountPerPage = { 3 }
                      totalItemsCount = { pageDto.totalBoards }
                      pageRangeDisplayed = { 5 }
                      onChange={ onPage }
               />
         </div>
     );
}