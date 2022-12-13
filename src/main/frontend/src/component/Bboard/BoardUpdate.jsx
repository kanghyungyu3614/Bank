import React from 'react';
import axios from 'axios'


export default function BoardUpdate( props ) {

  return(
              <div className = "mbox">

                   <h3> 수정페이지 </h3>

                   제목 : <input type="text" name="btitle"/>
                  첨부파일 : <input type="file" name="bfile"/>

                    <textarea id="text" name="bcontent"> </textarea>
              </div>
  );

}