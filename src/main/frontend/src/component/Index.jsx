import React from 'react';

// 라우터 설치[ 터미널 ] : npm i react-router-dom == npm install react-router-dom
// import { 컴포넌트명 } from 'react-router-dom'; v6
import { HashRouter, BrowserRouter, Routes, Route, Link,  Router } from "react-router-dom";
import styles from "./css/Index.css";
import SecurityCard from "./security/SecurityCard";
import SecurityCardPassword from "./security/SecurityCardPassword";
    // BrowserRouter : 가상 URL
    //  vs HashRouter :
    // Routes :  Route 목록/리스트
    // Route :  가상 URL 만들기 --> 해당 URL 에 따른 컴포넌트 렌더링 [ SPA ]
    // Link :   <---> a 태그  : 하이퍼링크
        // Link to = "Route Path"
    // Router :
/* 2022-12-06 강현규 보안카드 프론트작성 */
export default function Index( props ){
    return  (
        <div className="webbox">
            <BrowserRouter>
                    <ul>
                        <li><a href="/">홈URL</a></li>
                        <li><a href="/member/securityCard/password">보안코드 비밀번호</a></li>
                        <li><a href="/member/securityCard">보안코드URL</a></li>
                    </ul>
                    <Routes>
                        <Route path="/member/securityCard/password" element={ <SecurityCardPassword/> }/>
                        <Route path="/member/securityCard" element={ <SecurityCard/> }/>
                    </Routes>
            </BrowserRouter>
        </div>
    );
}