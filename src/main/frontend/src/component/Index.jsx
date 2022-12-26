import React from 'react';


// 라우터 설치[ 터미널 ] : npm i react-router-dom == npm install react-router-dom
// import { 컴포넌트명 } from 'react-router-dom'; v6
import {HashRouter, BrowserRouter, Routes, Route, Link, Router} from "react-router-dom";

import Header from './Header'
import Footer from './Footer'
import Main from "./Main";
import styles from "./css/Index.css";
import Bank from './Bank/Account' // 계좌 임포트
import SecurityCard from "./security/SecurityCard";   //  보안카드 임포트
import SecurityCardPassword from "./security/SecurityCardPassword";  // 보안카드 패스워드
import BoardList from "./Bboard/Board";    // 공지사항 임포트
import BoardWrite from "./Bboard/BoardWrite";
import BoardUpdate from "./Bboard/BoardUpdate";
import BoardView from "./Bboard/BoardView";
import Signup from "./Bank/Signup"; // 회원가입
import Login from "./Bank/Login"; // 로그인

import DealReport from "./Bank/DealReport"; // 거래내역 페이지
import DealReportPassword from "./Bank/DealReportPassword"; // 거래내역 비밀번호 페이지
import Nav from "./Nav"; // 네비게이션 페이지

import style from "./css/Index.css"
// BrowserRouter : 가상 URL
//  vs HashRouter :
// Routes :  Route 목록/리스트
// Route :  가상 URL 만들기 --> 해당 URL 에 따른 컴포넌트 렌더링 [ SPA ]
// Link :   <---> a 태그  : 하이퍼링크
// Link to = "Route Path"
// Router :
/* 2022-12-06 강현규 보안카드 프론트작성 */
export default function Index(props) {
    return (
        <div className="webbox">
            <BrowserRouter>
                <Header/>
                <Nav/>
                <Main/>
                <div style={{border:"1px red solid"}}>
                    <Routes>
                        <Route path="/Bank/Account" element={<Bank/>}/>
                        <Route path="/member/securityCard/password" element={<SecurityCardPassword/>}/>
                        <Route path="/member/securityCard" element={<SecurityCard/>}/>
                        <Route path="/Bboard/Board" element={<BoardList/>}/>
                        <Route path="/Bank/Signup" element={<Signup/>}/>
                        <Route path="/Bank/Login" element={<Login/>}/>
                        <Route path="/Bboard/BoardWrite" element={<BoardWrite/>}/>
                        <Route path="/Bboard/BoardUpdate/:bno" element={<BoardUpdate/>}/>
                        <Route path="/Bboard/BoardView/:bno" element={<BoardView/>}/>
                        <Route path="/admin/dealReport/password" element={<DealReportPassword/>}/>
                        <Route path="/admin/dealReport" element={<DealReport/>}/>
                    </Routes>
                </div>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}