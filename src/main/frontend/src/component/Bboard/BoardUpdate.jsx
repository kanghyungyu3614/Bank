import React, { useState , useEffect } from 'react'
import axios from 'axios'
import { useParams , link } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

let bcontent = ''

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
                  formdata.set( "bcontent" , bcontent ); // 수정할 게시물 내용

                  axios .put("/bupdate" , formdata , { headers: { 'Content-Type': 'multipart/form-data'  } } )
                                 .then( res => {
                                         if( res.data == true ){ console.log( res ); console.log('게시물 수정 성공'); }
                                         else{ console.log('게시물 수정 실패'); }
                                     })
                                 .catch( err => { console.log( err ); } )

                   }

  return(

          <div>
              <form className = "mbox">

                   <h3> 수정페이지 </h3>

                    제목 : <input type="text" name="btitle" defaultValue={ board.btitle } />

                                 <CKEditor
                                                     editor={ ClassicEditor }
                                                     data= { board.bcontent }
                                                     onChange={ ( event, editor ) => {
                                                    const data = editor.getData();  bcontent = data  }  }

                                                 />
                                 첨부파일 : <input type="file" name="bfile" />


                <div> <button type="button" className="ubtn" onClick={ upboard }> 수정</button></div>

              </form>


           </div>
  );

}