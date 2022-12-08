import React,{useState,useEffect} from 'react';
import '../css/SecurityCard.css'
import axios from 'axios'; //   npm install axios 설치 했을경우만 가능
import SecurityMainNumber from './SecurityComponent/SecurityMainNumber'
import SecuritySubNumber from './SecurityComponent/SecuritySubNumber'


export default function SecurityCard (){
    /* 2022-12-06 강현규 보안카드 프론트작성 */
    //8783 76 9934
    //77 99, 71 15, 96 21, 75 92, 33 09, 30 06, 18 72, 37 18, 90 42, 80 22, 71 78, 57 16, 93 35, 90 64, 55 81, 28 36, 68 06, 76 58, 74 47, 19 54, 05 66, 47 54, 22 06, 07 77, 00 25, 73 31, 55 93, 72 96, 27 93, 68 78, 19 24, 86 34, 93 48, 16 39, 35 06
    const [ SecurityCardMainData , setSecurityCardMainData] = useState([])
    const [ SecurityCardSebData , setSecurityCardSebData] = useState([])

    useEffect(()=>{
    axios.get( "http://localhost:8080/bank/securityCard") // 요청
                  .then( res => {
                          alert( res.data);
                          console.log("res.data는?");
                          console.log(res.data);
                          setSecurityCardMainData( res.data[0].smno )
                          setSecurityCardSebData( res.data[0].ssno )
                          console.log("axios안의 SecurityCardMainData");
                          console.log(SecurityCardMainData);
                          console.log("axios안의 SecurityCardSebData");
                          console.log(SecurityCardSebData);
        })// 응답
    },[])
        console.log("axios 밖의 SecurityCardMainData");
        console.log(SecurityCardMainData);
        console.log("axios 밖의 SecurityCardSebData");
        console.log(SecurityCardSebData);

      return (
        <div className="securitCard">
            {/* main number */}
            <div className="main">
                <div className="mainSecutiryContent">피싱사기 주의!!! 보안카드번호 35개 전체입력 절대금지</div>
                <div className="mainSecutiryNumber"><SecurityMainNumber props={SecurityCardMainData}/></div>
            </div>

            {/* sub number */}

                {/*PrintSecuritySubCardInfo*/}
                {/*더미데이터입니다. 시작*/}
                {/*PrintSecurityCardInfo() 함수실행해서 데이터를 여기에 뿌려준다.*/}

                    <SecuritySubNumber props={SecurityCardSebData}/>
                {/*
                 <tr>
                    <th className="securitysubNumber">01</th>
                    <th className="securityMainNumber">00 00</th>
                    <th className="securitysubNumber">02</th>
                    <th className="securityMainNumber">00 00</th>
                    <th className="securitysubNumber">03</th>
                    <th className="securityMainNumber">00 00</th>
                    <th className="securitysubNumber">04</th>
                    <th className="securityMainNumber">00 00</th>
                    <th className="securitysubNumber">05</th>
                    <th className="securityMainNumber">00 00</th>
                </tr>
                <tr>
                    <th className="securitysubNumber">06</th>
                    <th className="securityMainNumber">00 00</th>
                    <th className="securitysubNumber">07</th>
                    <th className="securityMainNumber">00 00</th>
                    <th className="securitysubNumber">08</th>
                    <th className="securityMainNumber">00 00</th>
                    <th className="securitysubNumber">09</th>
                    <th className="securityMainNumber">00 00</th>
                    <th className="securitysubNumber">10</th>
                    <th className="securityMainNumber">00 00</th>
                </tr>
                <tr>
                    <th className="securitysubNumber">11</th>
                    <th className="securityMainNumber">00 00</th>
                    <th className="securitysubNumber">12</th>
                    <th className="securityMainNumber">00 00</th>
                    <th className="securitysubNumber">13</th>
                    <th className="securityMainNumber">00 00</th>
                     <th className="securitysubNumber">14</th>
                    <th className="securityMainNumber">00 00</th>
                    <th className="securitysubNumber">15</th>
                     <th className="securityMainNumber">00 00</th>
                </tr>
                <tr>
                     <th className="securitysubNumber">16</th>
                     <th className="securityMainNumber">00 00</th>
                     <th className="securitysubNumber">17</th>
                     <th className="securityMainNumber">00 00</th>
                     <th className="securitysubNumber">18</th>
                     <th className="securityMainNumber">00 00</th>
                     <th className="securitysubNumber">19</th>
                     <th className="securityMainNumber">00 00</th>
                     <th className="securitysubNumber">20</th>
                     <th className="securityMainNumber">00 00</th>
                </tr>
                <tr>
                    <th className="securitysubNumber">21</th>
                    <th className="securityMainNumber">00 00</th>
                    <th className="securitysubNumber">22</th>
                    <th className="securityMainNumber">00 00</th>
                    <th className="securitysubNumber">23</th>
                    <th className="securityMainNumber">00 00</th>
                    <th className="securitysubNumber">24</th>
                    <th className="securityMainNumber">00 00</th>
                    <th className="securitysubNumber">25</th>
                    <th className="securityMainNumber">00 00</th>
                </tr>
                <tr>
                     <th className="securitysubNumber">26</th>
                     <th className="securityMainNumber">00 00</th>
                     <th className="securitysubNumber">27</th>
                     <th className="securityMainNumber">00 00</th>
                     <th className="securitysubNumber">28</th>
                     <th className="securityMainNumber">00 00</th>
                     <th className="securitysubNumber">29</th>
                     <th className="securityMainNumber">00 00</th>
                     <th className="securitysubNumber">30</th>
                     <th className="securityMainNumber">00 00</th>
                </tr>
                <tr>
                      <th className="securitysubNumber">31</th>
                      <th className="securityMainNumber">00 00</th>
                      <th className="securitysubNumber">32</th>
                      <th className="securityMainNumber">00 00</th>
                      <th className="securitysubNumber">33</th>
                      <th className="securityMainNumber">00 00</th>
                      <th className="securitysubNumber">34</th>
                      <th className="securityMainNumber">00 00</th>
                      <th className="securitysubNumber">35</th>
                      <th className="securityMainNumber">00 00</th>
                </tr>*/
                }
                {/*더미데이터입니다. 끝*/}
            <div className="warningContent">
                <span className="warningMainContent">파싱 사기 주의!!</span>
                <span className="warningSubContent"> 정상적인 금융거래는 어떠한 경우에도</span>
                <span className="warningMainContent">보안카드번호 3개이상</span>
                <span className="warningSubContent"> 또는 </span>
                <span className="warningMainContent">전체를 요구하지 않습니다.</span><br/>
                <span className="warningMainContent">사진 촬영, 복사금지!!</span>
                <span className="warningSubContent"> 보안카드를 </span>
                <span className="warningMainContent">스마트폰, 이메일, 컴퓨터(PC)등</span>
                <span className="warningSubContent"> 에 </span>
                <span className="warningMainContent">절대 보관하지 마세요.</span>
            </div>
        </div>
        );
}


