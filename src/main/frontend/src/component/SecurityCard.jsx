import React,{useState,useEffect} from 'react';
import './css/SecurityCard.css'
import axios from 'axios'; //   npm install axios 설치 했을경우만 가능

export default function SecurityCard (){

    //@CrossOrigin(origins = "http://localhost:3000")
    let data =  axios.get( "http://localhost:8080/member/securityCard") // 요청
                .then( res => { alert( res.data);console.log(res);} )                    // 응답


    function PrintSecurityCardInfo(){
        for(let i=0; i<data.length; i++){


        }
    }



  return (
    <div className="securitCard">
        {/* main number */}
        <div className="main">
            <div>피싱사기 주의</div>
            <div className="mainSecutiryNumber">0000 00 0000{/*data.mainNumber*/}</div>
        </div>

        {/* sub number */}
        <div className="sub">
            <div>1.|00 00 00</div>
            <div>2.|00 00 00</div>
            <div>3.|00 00 00</div>
            <div>4.|00 00 00</div>
            <div>5.|00 00 00</div>
            <div>6.|00 00 00</div>
            <div>7.|00 00 00</div>
            <div>8.|00 00 00</div>
            <div>9.|00 00 00</div>
            <div>10.|00 00 00</div>
            {/*PrintSecurityCardInfo()*/}
        </div>
    </div>
    );
}


