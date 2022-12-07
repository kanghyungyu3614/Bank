import React from 'react';
import '../css/SecurityCardPassword.css';

/*강현규 2022-12-07 좌번호 4자리 페이지로 보안카드페이지 이동할때 password 내용*/
export default function SecurityCardPassword(){
    return(
    <div className="passwordComponent">
        <span className="passwordContent">계좌 비밀번호 4자리를 입력해주세요.</span><br/>
        <input type="password" className="passwordInput" placeholder="****"/>
        <button type="button" className="submitButton">전송</button>
    </div>
    );
}