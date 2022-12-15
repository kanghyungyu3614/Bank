import React , { useState , useEffect } from 'react';
import { useParams , Link  } from "react-router-dom";
import axios from "axios";


export default function BoardView( props ) {

    const params = useParams();
    console.log(params);

    const [ board , setBoard ] = useState( { } ); // 게시물 메모리
    const [ login , setLogin ] = useState( { } ); // 로그인 /( 관리자 관련)

    useEffect(  // 1. 서버로 부터 해당 게시물 번호 의 게시물 정보 -> useState[board[ 요청[
           ()=> axios  .get( "/bdetail" , { params : { bno: params.bno } } ).then( res => { setBoard( res.data ) })
        , [] )

   /*useEffect( // 2. 서버로 부터 해당 로그인된 회원의 아이디 정보
          ()=>axios.get("/member" ).then( res => { setLogin( res.data); }) ,[] )*/


   // 해당 게시물 번호의 업데이트 페이지로 이동
      const getUpdate = () => { window.location.href='/Bboard/BoardUpdate/'+ params.bno; }

   //삭제
    const onDelete = () => {
            axios.   delete( "/delboard" , { params : { bno: params.bno}}).then( res => { alert('삭제 성공'); window.location.href='/Bboard/Board'; })
           }

   return(
      <div>
      <h3> 자세히 보기 </h3>

       <div  className = "mbox">
           <div> { board.btitle } </div>
           <div> { board.bcontent} </div>

            { board.bfilename != '' && <a href={"/board/filedownload?filename=" + board.bfilename} > { board.bfilename } </a> }

             <button type="button"> <Link to="/Bboard/Board">목록</Link> </button>

            <button type="button" onClick= { onDelete }> 삭제 </button>
             <button type="button" onClick={ getUpdate}> 수정 </button>

         </div>
         </div>

         /* login == board.mid("admin") &&*/



   );





}