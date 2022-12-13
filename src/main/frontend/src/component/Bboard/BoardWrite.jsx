import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function BoardWrite( props ){

    const bwrite = () => {

        let boardform = document.querySelector('.bbord');
        let formdata = new FormData( boardform );

        axios .get("/bwrtie", formdata ,{ headers: { 'Content-Type': 'multipart/form-data'  } }  )
              .then( res => {
                      console.log( res.data )
                      if( res.data == true ){ alert('게시물 작성 성공'); }
                      else{ alert('게시물 작성 실패'); }
                  })
              .catch( err => { console.log( err ); } )
     }

  return(
         <div className = "mbox">
             <form className = "bbord">
                 제목 : <input type="text" name="btitle"/>
                 첨부파일 : <input type="file" name="bfile"/>

                <textarea name="content"> </textarea>

                 <button type="button"> <Link to="/Bboard/Board">목록</Link> </button>
                 <button type="button" onClick={ bwrite } >등록</button>
             </form>

           </div>
  );


}