import react from 'react';
import logo from "../img/logo 2.jpg";

export default function Header(props) {
/* 2022-12-27 강현규 프론트 a태그 설정 */
    return (
        <div class="hbox" style={{backgroundColor:"#193f52"}}>
            <div style={{backgroundColor:"#193f52"}}>
                <div>
                <a href="/"><img src={logo} style={{width: "9%", float: "left"}}/></a>
                </div>
                <a href="/" style={{color: "#3598db",
                                    textDecoration: "none",
                                    outline: "none"}}>
                    <h3 style={{
                        textAlign: "center",
                        fontSize:"123%",
                        color:"#3598db",
                        float: "right",
                        paddingBottom:"13px"}}>Welcome_$ecurity_Bank</h3>
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