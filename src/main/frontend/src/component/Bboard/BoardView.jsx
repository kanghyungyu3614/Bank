import React , { useState , useEffect } from 'react';
import { useParams , Link  } from "react-router-dom";
import axios from "axios";

import styles from './board.css'

export default function BoardView( props ) {

    const params = useParams();
    console.log(params);

    const [ board , setBoard ] = useState( { } ); // 게시물 메모리
    const [login, setLogin] = useState( { } );  // 로그인 /( 관리자 관련)

    useEffect(  // 1. 서버로 부터 해당 게시물 번호 의 게시물 정보 -> useState[board[ 요청[
           ()=> axios  .get( "/bdetail" , { params : { bno: params.bno } } ).then( res => { setBoard( res.data ) })
        , [] )

   useEffect( // 2. 서버로 부터 해당 로그인된 회원의 아이디 정보
          ()=>axios.get("/member/getloginMno" ).then( res => { setLogin( res.data); console.log( "로그인계정" + res.data )}) ,[] )


   // 해당 게시물 번호의 업데이트 페이지로 이동
      const getUpdate = () => { window.location.href='/Bboard/BoardUpdate/'+ params.bno; }


   //삭제
    const onDelete = () => {
            axios.   delete( "/delboard" , { params : { bno: params.bno}}).then( res => { alert('삭제 성공'); window.location.href='/Bboard/Board'; })
           }

   return(

      <div  className = "mbox">
           <h4 ClassName ="notice" > 공지 사항 </h4>

        <div className ="tbox">
            <div> { board.btitle } </div>
            <div> { board.bdate } </div>
        </div>

            <div className="bconbox" dangerouslySetInnerHTML={{__html:board.bcontent }} ></div>

            { board.bfilename != '' && <a href={"/board/filedownload?filename=" + board.bfilename} > { board.bfilename } </a> }


         <span>
             <div className = "rbox">
             <button type="button"> <a className="libtn" href="/Bboard/Board">목록</a> </button>
             </div>

             <div className ="adbox">
            { login == "adminLogin" &&  <button type="button" className="dbtn" onClick= { onDelete }> 삭제 </button> }
            { login == "adminLogin" &&  <button type="button" className="ubtn2" onClick={ getUpdate}> 수정 </button> }
            </div>
          </span>

         </div>


         /* login == board.mid("admin") &&*/



   );





}