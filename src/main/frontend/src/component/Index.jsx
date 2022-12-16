import React from 'react';

// 라우터 설치[ 터미널 ] : npm i react-router-dom == npm install react-router-dom
// import { 컴포넌트명 } from 'react-router-dom'; v6
import { HashRouter, BrowserRouter, Routes, Route, Link,  Router } from "react-router-dom";

import Header from './Header'
import Footer from './Footer'
import styles from "./css/Index.css";
import Signup from "./Bank/Signup.jsx";
import Bank from './Bank/Account' // 계좌 임포트
import SecurityCard from "./security/SecurityCard";   //  보안카드 임포트
import SecurityCardPassword from "./security/SecurityCardPassword";  // 보안카드 패스워드
import BoardList from "./Bboard/Board";    // 공지사항 임포트
import BoardWrite from "./Bboard/BoardWrite";
import BoardUpdate from "./Bboard/BoardUpdate";
import BoardView from "./Bboard/BoardView";
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
export default function Index( props ){
    return  (
        <div className="webbox">
            <BrowserRouter>
              <Header/>
                    <ul className="main_sidebar">
                        <li className="urlList"><a href="/">홈URL</a></li>
                        <li className="urlList"><a href="/member/securityCard/password">보안코드</a></li>
                        <li className="urlList"><a href="/member/Signup">회원가입 </a></li>
                        <li className="urlList"><a href="/Bank/Account">계좌송금</a></li>
                        <li className="urlList"><a href="/Bboard/Board">공지사항</a></li>
                        <li className="urlList"><a href="/admin/dealReport/password">거래내역</a></li>

                    </ul>
                    <Routes>
                        <Route path="/Bank/Account" element={ <Bank/> }/>
                        <Route path="/member/securityCard/password" element={ <SecurityCardPassword/> }/>
                        <Route path="/member/securityCard" element={ <SecurityCard/> }/>
                        <Route path="/member/Signup" element={<Signup/>}/>
                        <Route path="/Bboard/Board" element={ <BoardList/> }/>
                        <Route path="/Bboard/BoardWrite" element={ <BoardWrite/> }/>
                        <Route path="/Bboard/BoardUpdate" element={ <BoardUpdate/> }/>
                        <Route path="/admin/dealReport/password" element={ <DealReportPassword/> }/>
                        <Route path="/admin/dealReport" element={ <DealReport/> }/>
                    </Routes>
                  <Footer/>
            </BrowserRouter>
        </div>
    );
}