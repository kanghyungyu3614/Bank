import React, { useState, useRef } from 'react';
import '../css/SecurityCardPassword.css';
import { useNavigate } from 'react-router-dom'; // 설치한 패키지// 참고 : 6버전에서 useNavigate로 변경되었다.
import axios from 'axios';
import Form from 'react-bootstrap/Form'; // react bootstrap install 2022-12-16 강현규
import Button from 'react-bootstrap/Button'; // react bootstrap install 2022-12-16 강현규

/*강현규 2022-12-07 좌번호 4자리 페이지로 보안카드페이지 이동할때 password 내용*/
/*강현규 2022-12-08 계좌비밀번호 입력해서 보안카드 페이지로 이동*/
export default function SecurityCardPassword(){
    // react에서 location.href가 안되서 블로그를 찾아보다 useHistory를 찾게 되었습니다.
    const navigate = useNavigate();
    function handleUseHistory() {
        navigate('/member/securityCard'); // "/member/securityCard"로 url 이동
     }
    // dom 역할을 하는  useRef 입니다.
    // dom 으로 password변수를 밑에 input의 속성 에 지정해줍니다.
    const password = useRef(); // useRef()를 일단 가지고 옵니다.
    function SubmitButton (){
    console.log(password.current.value);
    alert(password.current.value);
    // passwordData 를 axios로 보내기위해 이렇게 형태를 잡을겁니다.
    let passwordData = {acpw : password.current.value};
    axios.post("/bank/securityCard/Password", passwordData)
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
    <div className="passwordComponent">
        <Form>
          <Form.Group id="passwordContent" className="mb-3" controlId="formGroupPassword">
            <Form.Control type="password" placeholder="계좌 비밀번호 4자리를 입력해주세요." type="password" maxLength="4" className="passwordInput" ref={password} />
          </Form.Group>
        </Form>


           <Button variant="primary" type="button" id="submitButtonId" className="submitButton" onClick={SubmitButton}>
                전송
              </Button>

    </div>
    );
}