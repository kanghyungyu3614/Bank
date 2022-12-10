import React, { useState ,useEffect,useRef } from 'react';
import '../css/DealReportPassword.css';
import { useNavigate } from 'react-router-dom'; /*설치한 패키지// 참고 : 6버전에서 useNavigate로 변경되었다. */
import axios from 'axios';

{/*강현규 2022-12-10 계좌비밀번호 입력해서 거래내역 페이지 이동*/}
export default function DealReportPassword(){

  // react에서 location.href가 안되서 블로그를 찾아보다 useHistory를 찾게 되었습니다.
    const DealRerportNavigate = useNavigate();
    function handleUseHistory() {
        DealRerportNavigate('/bank/dealReport'); //"/member/securityCard"로 url 이동
     }
    // dom 역할을 하는  useRef 입니다.
    // dom 으로 password변수를 밑에 input의 속성 에 지정해줍니다.
    const password = useRef(); // useRef()를 일단 가지고 옵니다.
    function SubmitButton (){
    console.log(password.current.value);
    alert(password.current.value);
    // passwordData 를 axios로 보내기위해 이렇게 형태를 잡을겁니다.
    let DealRerportpasswordData = {acpw : password.current.value};
    axios.post("http://localhost:8080/bank/dealReport/password", DealRerportpasswordData)
    .then((re)=>{
        console.log("SubmitButtong함수 잘실행되니??");
        console.log("re: " + re.data);
        if(re.data ===1){
           handleUseHistory();
        }else{ alert("지금입력하신 비밀번호는 없는번호 입니다.")}
        }
    )
    .catch((error)=>{ console.log(error);})
    }

    return(
    <div className="DealpasswordComponent">
        <span className="DealpasswordContent">계좌 비밀번호 4자리를 입력해주세요.</span><br/>
        <input type="password" maxLength="4" className="DealpasswordInput"placeholder="****" ref={password}/>
        <button type="button" className="DealsubmitButton" onClick={SubmitButton}>전송</button>
    </div>
    );
}
