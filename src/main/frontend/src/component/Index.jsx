import React from 'react';

// 라우터 설치[ 터미널 ] : npm i react-router-dom == npm install react-router-dom
// import { 컴포넌트명 } from 'react-router-dom'; v6
import { HashRouter, BrowserRouter, Routes, Route, Link,  Router } from "react-router-dom";
import styles from "./css/Index.css";
import SecurityCard from "./security/SecurityCard"; // 보안카드 페이지
import SecurityCardPassword from "./security/SecurityCardPassword"; // 보안카드 비밀번호 입력 페이지
import Bank from './Bank/Account'; // 계좌 페이지
import DealReport from "./Bank/DealReport"; // 거래내역 페이지
import DealReportPassword from "./Bank/DealReportPassword"; // 거래내역 비밀번호 페이지
    // BrowserRouter : 가상 URL
    //  vs HashRouter :
    // Routes :  Route 목록/리스트
    // Route :  가상 URL 만들기 --> 해당 URL 에 따른 컴포넌트 렌더링 [ SPA ]
    // Link :   <---> a 태그  : 하이퍼링크
        // Link to = "Route Path"
    // Router :
/* 2022-12-06 강현규 보안카드 프론트작성 */
/* 2022-12-09 강현규 일단 경주님꺼까지 라우트 연결추가 */
/* 2022-12-11 거래내역 출력 페이지 연결 추가 */
export default function Index( props ){
    return  (
        <div className="webbox">
            <BrowserRouter>
                    <ul>
                        <li><a href="/">홈URL</a></li>
                        <li><a href="/member/securityCard/password">보안코드</a></li>
                        <li><a href="/member/account">계좌거래</a></li>
                        <li><a href="/member/dealReport/password">거래내역 비밀번호 페이지</a></li>
                    </ul>
                    <Routes>
                        <Route path="/member/securityCard/password" element={ <SecurityCardPassword/> }/>
                        <Route path="/member/securityCard" element={ <SecurityCard/> }/>
                        <Route path="/member/account" element={ <Bank/> }/>
                        <Route path="/member/dealReport/password" element={ <DealReportPassword/> }/>
                        <Route path="/member/dealReport" element={ <DealReport/> }/>
                    </Routes>
            </BrowserRouter>
        </div>
    );
}