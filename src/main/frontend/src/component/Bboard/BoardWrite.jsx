import React , { useState , useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import styles from './board.css'

let bcontent = '';

export default function BoardWrite( props ){

    const bwrite = () => {

        let boardform = document.querySelector('.bbord');
        let formdata = new FormData( boardform );

        formdata.set('bcontent',  bcontent );

        axios .post("/bwrite", formdata ,{ headers: { 'Content-Type': 'multipart/form-data'  } }  )
              .then( res => {
                      console.log( res.data )
                      if( res.data == true ){ console.log('게시물 작성 성공'); }
                      else{ console.log('게시물 작성 실패'); }
                  })
              .catch( err => { console.log( err ); } )
     }

      const [login, setLogin] = useState( { } );  // 로그인 /( 관리자 관련)

       useEffect( // 2. 서버로 부터 해당 로그인된 회원의 아이디 정보
                ()=>axios.get("/member/getloginMno" ).then( res => { setLogin( res.data); console.log( "로그인계정" + res.data )}) ,[] )

  return(
         <div className = "mbox">
             <form className = "bbord">
                  제목 : <input type="text" name="btitle" />

                     <CKEditor
                                      editor={ ClassicEditor }
                                      data=""
                                      onChange={ ( event, editor ) => {
                                      const data = editor.getData();  bcontent = data  }  }

                                     />
                     첨부파일 : <input type="file" name="bfile" />
             </form>

             <div className = "bltn"><button type="button"> <a className="libtn" href="/Bboard/Board">목록</a> </button></div>

            {  login == "adminLogin" && <div className = "wbtn"><button type="button" onClick={ bwrite } >등록</button></div> }
           </div>
  );


}