import React from 'react';

// 라우터 설치[ 터미널 ] : npm i react-router-dom == npm install react-router-dom
// import { 컴포넌트명 } from 'react-router-dom'; v6
import { HashRouter, BrowserRouter, Routes, Route, Link,  Router } from "react-router-dom";
import SecurityCard from "./SecurityCard"
import styles from "./css/Index.css"
    // BrowserRouter : 가상 URL
    //  vs HashRouter :
    // Routes :  Route 목록/리스트
    // Route :  가상 URL 만들기 --> 해당 URL 에 따른 컴포넌트 렌더링 [ SPA ]
    // Link :   <---> a 태그  : 하이퍼링크
        // Link to = "Route Path"
    // Router :
export default function Index( props ){
    return  (
        <div className="webbox">
            <BrowserRouter>
                    <li><a href="/">홈URL</a></li>
                    <li><a href="/member/securityCard">보안코드URL</a></li>
                    <Routes>
                        <Route path="/member/securityCard" element={ <SecurityCard/> }/>
                    </Routes>
            </BrowserRouter>
        </div>
    );
}