import react from 'react';
import logo from "../img/logo 2.jpg";

export default function Header(props) {

    return (
        <div class="hbox" style={{backgroundColor:"#193f52"}}>

            <div style={{backgroundColor:"#193f52"}}>
                <img src={logo} style={{width: "9%",margin:"0% 0% 0% 44%"}}/>
                <h3 style={{
                    textAlign: "center",
                    fontSize:"123%",
                    color:"#3598db",
                    paddingBottom:"13px"
                }}>Welcome_$ecurity_Bank</h3>
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