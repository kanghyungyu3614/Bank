import React,{useState,useEffect} from'react';
import'../css/SecurityCard.css'
import axios from'axios';//   npm install axios설치 했을경우만 가능
import SecurityMainNumber from'./SecurityComponent/SecurityMainNumber'
import SecuritySubNumber from'./SecurityComponent/SecuritySubNumber'


export default function SecurityCard (){
/* 2022-12-06강현규 보안카드 프론트작성 */
    //8783 76 9934
    //77 99, 71 15, 96 21, 75 92, 33 09, 30 06, 18 72, 37 18, 90 42, 80 22, 71 78, 57 16, 93 35, 90 64, 55 81, 28 36, 68 06, 76 58, 74 47, 19 54, 05 66, 47 54, 22 06, 07 77, 00 25, 73 31, 55 93, 72 96, 27 93, 68 78, 19 24, 86 34, 93 48, 16 39, 35 06
const [ SecurityCardMainData , setSecurityCardMainData] = useState('')
    const [ SecurityCardSebData , setSecurityCardSebData] = useState('')

    useEffect(()=>{
        axios.get("http://localhost:8080/bank/securityCard")//요청
.then( res => {
                              setSecurityCardMainData( res.data[0].smno )
                              setSecurityCardSebData( res.data[0].ssno )
            })//응답
},[SecurityCardMainData ,  SecurityCardSebData  ])

return(
        <div className="securitCard">
            {/* main number */}
            <div className="main">
                <div className="mainSecutiryContent">피싱사기 주의!!! 보안카드번호 35개 전체입력 절대금지</div>
                <div className="mainSecutiryNumber"><SecurityMainNumber props={SecurityCardMainData}/></div>
            </div>
            {/*sub number PrintSecurityCardInfo()함수실행해서 데이터를 여기에 뿌려준다.*/}
            <SecuritySubNumber props={SecurityCardSebData}/>
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


