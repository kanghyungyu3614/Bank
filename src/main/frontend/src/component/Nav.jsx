/* 2022-12-27 강현규 네비게이션 설정 */
import React , {useState,useEffect} from 'react';
import './css/Nav.css';
import axios from 'axios'; // react 비동기 통신 라이브러리 [ npm i axios ]
import { HashRouter, BrowserRouter, Routes, Route, Link,  Router } from "react-router-dom";
import Main from "./Main";
export default function Nav (){

    const [login, setLogin] = useState(null); // 로그인된 회원정보 state 생명주기 // 변경시 재 렌더링
    // 1. 서버와 통신 [ axios ]
    // 1. 비동기 통신 [ AJAX , fetch(리액트 내장 라이브러리) , Axios(설치형라이브러리) ]
    // axios : Data type default 타입으로 json으로 보낸다.
    useEffect(()=>{
        axios
            .get("/member/getloginMno")
            .then( (res) =>{
                console.log("res.data");
                console.log(res.data);
                console.log("res.data");
                setLogin(res.data);
                }
                )
    },[])

    return(
            <div style={{backgroundColor: "#193f52",marginTop:"50px"}}>
                   <ul className="main_sidebar" style={{display: "flex" }}>
                     {
                     login == "userLogin" ?
                      (
                          <>
                             <li className="urlList"> <a className="aList" href="/member/logout"> 로그아웃     </a> </li>
                             <li className="urlList"><a className="aList" href="/member/securityCard/password">보안코드</a></li>
                             <li className="urlList"><a className="aList" href="/Bank/Account">계좌송금</a></li>
                             <li className="urlList"><a className="aList" href="/Bboard/Board">공지사항</a></li>
                          </>
                      )
                     :
                     login == "adminLogin" ?
                     (
                         <>
                            <li className="urlList"> <a className="aList" href="/member/logout"> 로그아웃     </a> </li>
                            <li className="urlList"><a className="aList" href="/member/securityCard/password">보안코드</a></li>
                            <li className="urlList"><a className="aList" href="/Bank/Account">계좌송금</a></li>
                            <li className="urlList"><a className="aList" href="/admin/dealReport/password">거래내역</a></li>
                            <li className="urlList"><a className="aList" href="/Bboard/Board">공지사항</a></li>
                         </>
                     )
                     :
                     (
                         <>
                            <li className="urlList"><a className="aList" href="/Bank/Signup">회원가입 </a></li>
                            <li className="urlList"><a className="aList" href="/Bank/Login">로그인</a></li>
                            <li className="urlList"><a className="aList" href="/Bboard/Board">공지사항</a></li>
                         </>
                     )
                     }
                   </ul>
               </div>
           )
}