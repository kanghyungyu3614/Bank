import react from 'react';
import logo from "../img/logo 2.jpg";

export default function Header(props) {

    return (
        <div style={{backgroundColor:"#193f52"}}>

            <div style={{backgroundColor:"#193f52"}}>
               <a href="/">
                   <img src={logo} style={{width: "10%",margin:"0% 0% 0% 43%"}}/>
               </a>
            </div>

        </div>

    )
}


{/*     <div>
                <ul>
                    <li><a>개인</a></li>
                    <li><a>기업</a></li>
                    <li><a>자산관리</a></li>
                    <li><a>금융 상품</a></li>
                    <li><a>카드 전체메뉴</a></li>
                </ul>
            </div>
*/}