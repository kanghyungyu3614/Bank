import React, { useState, useRef } from 'react';
import '../css/SecurityCardPassword.css';
//import { useHistory } from "react-router-dom"; // 참고 : 6버전에서 useNavigate로 변경되었다.
import axios from 'axios';

/*강현규 2022-12-07 좌번호 4자리 페이지로 보안카드페이지 이동할때 password 내용*/

export default function SecurityCardPassword(){
    // dom 역할을 하는  useRef 입니다.
    // dom 으로 password변수를 밑에 input의 속성 에 지정해줍니다.
    const password = useRef(); // useRef()를 일단 가지고 옵니다.
    function SubmitButton (){
    console.log(password.current.value);
    alert(password.current.value);
    // passwordData 를 axios로 보내기위해 이렇게 형태를 잡을겁니다.
    let passwordData = {acpw : password.current.value};
    axios.post("http://localhost:8080/securityCardPassword", passwordData)
    .then((re)=>{
        console.log("SubmitButtong함수 잘실행되니??");
        alert("SubmitButtong함수 잘실행되니??");
        console.log("re: " + re);
        }
    )
    .catch((error)=>{ console.log(error);})
    }

    return(
    <div className="passwordComponent">
        <span className="passwordContent">계좌 비밀번호 4자리를 입력해주세요.</span><br/>
        <input type="password" className="passwordInput" ref={password} placeholder="****"/>
        <button type="button" className="submitButton" onClick={SubmitButton}>전송</button>
    </div>
    );
}