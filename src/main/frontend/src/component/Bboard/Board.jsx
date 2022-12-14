import react from 'react';
import styles from './board.css'

export default function Board(props) {


return(
    <div className ="webbox">
           <div className= "cbox">
                      <div className = "mbox">
                        <h3> 글 목록 페이지</h3>
                             <table className = "blist" >
                              </table>

                            <div className="page"> </div>

                            <button><a href="/Bboard/BoardWrite">글등록 </a></button>  /*  관리자만 보이게 하기 */

                       </div>

              </div>

    </div>
);

}