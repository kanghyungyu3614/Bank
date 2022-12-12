import React, { useState, useEffect, useRef } from 'react';
import '../css/DealReport.css'
import { useNavigate } from 'react-router-dom'; // 설치한 패키지// 참고 : 6버전에서 useNavigate로 변경되었다.
import axios from 'axios';
import DealListComponent from './DealReportComponent/DealListComponent';
/*강현규 2022-12-12 admin에서의 user들의 거래내역 출력*/
export default function DealReport (){

    const [ dealReportMainData , setDealReportMainData] = useState([])
    useEffect(()=>{
    axios.get( "http://localhost:8080/bank/dealReport") // 요청
                  .then( res => {
                          console.log("res.data는?" + res.data);
                          console.log(res.data);
                          setDealReportMainData([...res.data])
                          console.log("axios안의 dealReportMainData");
                          console.log(dealReportMainData);
        })// 응답
    axios.post("http://localhost:8080/bank/dealReport")


    },[])
    console.log("axios밖의 dealReportMainData");
    console.log(dealReportMainData);
    return(
        <div className="dealReport">
            <div className="dealReportComtent">
                <div className="ContentText">
                    <span className="userNameOutput">모든 고객</span>
                    <span className="DefaultUserName">님의 거래내역</span>
                    <input type="text" className="userNameinput" placeholder="고객님의 이름을 적어주세요."/>
                    <button type="button" className="userNameButton">전송</button>
                </div>
            </div>
            <DealListComponent props={dealReportMainData}/>
        </div>
    );
}