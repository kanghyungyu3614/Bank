import React , { useState , useEffect } from 'react';
import axios from "axios";
import { useParams , Link } from "react-router-dom";

export default function BoardView(props) {

   return(

      <div  class = "mbox">
          <h3>상세 게시물</h3>
           <table>
               <tr>
                   <td>번호</td> <td id="bnumber">  </td> <td id="btitle">sdfsdfs </td>
               </tr>
               <tr>
                   <td id="bcontent"> </td>
               </tr>
           </table>
           <span> <div>첨부파일</div> <div id="file">  </div></span>

           <button type="button"> <Link to="/Bboard/Board">목록 </Link> </button>

           <button type="button" onclick="del()">  삭제</button>
           <a href="/"><button type="button" > 수정 </button></a>

       </div>

   );








}