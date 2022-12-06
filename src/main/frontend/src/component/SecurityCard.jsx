import React from 'react';
import './css/SecurityCard.css'
import axios from 'axios'; //   npm install axios 설치 했을경우만 가능

export default function SecurityCard (){

    //  @CrossOrigin(origins = "http://localhost:3000")
    let data =  axios.get( "http://localhost:8080/member/securityCard") // 요청
                .then( res => { alert( res.data);console.log(res);} )                    // 응답
    for(let i=0; i<data.length; i++){


    }

  return (
    <div className="securitCard">
        {/* main number */}
        <div className="main">
            <div>피싱사기 주의</div>
            <div className="mainSecutiryNumber">0000 00 0000</div>
        </div>

        {/* sub number */}
        <div className="sub">
            <div>test해보겠습니다.</div>
            <div>test해보겠습니다.</div>
            <div>test해보겠습니다.</div>
            <div>test해보겠습니다.</div>
            <div>test해보겠습니다.</div>
        </div>
    </div>
    );
}


