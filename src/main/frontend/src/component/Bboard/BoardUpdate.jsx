import React, { useState , useEffect } from 'react'
import axios from 'axios'
import { useParams , link } from "react-router-dom";



export default function BoardUpdate( props ) {


       const params = useParams();

           const[ board , setBoard ] = useState( { });

           useEffect( () => axios .get ( "/bdetail" , { params : { bno: params.bno } } ).then( res => { setBoard( res.data ) }) , [] )

             const upboard = () => { // 서버로부터 수정된 정보를 이용한 게시물 수정 요청
                    // 수정할 게시물 번호, 내용 , 첨부파일

                  let mbox = document.querySelector('.mbox');
                    console.log( mbox)
                  let formdata = new FormData( mbox );

                  //수정할 게시물번호
                  formdata.set( "bno" , board.bno);
                  formdata.set( "bcontent" , board.bcontent ); // 수정할 게시물 내용

                  axios .put("/bupdate" , formdata , { headers: { 'Content-Type': 'multipart/form-data'  } } )
                                 .then( res => {
                                         if( res.data == true ){ alert('게시물 수정 성공'); }
                                         else{ alert('게시물 수정 실패'); }
                                     })
                                 .catch( err => { console.log( err ); } )

                   }

  return(
              <form className = "mbox">

                   <h3> 수정페이지 </h3>

                   제목 : <input type="text" name="btitle"  defaultValue={board.btitle} />
                   첨부파일 : <input type="file" name="bfile" />

                   <textarea id="text" name="bcontent"  defaultValue={board.bcontent} />

                    <button type="button" onClick={ upboard }> 수정</button>

              </form>
  );

}