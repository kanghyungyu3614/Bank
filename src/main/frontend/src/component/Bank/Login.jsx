/* 2022-12-27 강현규 admin user 로그인,로그아웃 구현 */
import react from 'react';
import axios from 'axios';
import '../css/Login.css';

export default function Login(){

   function loginMember (){
        let data ={
            mid : document.querySelector('.memail').value,
            mpw : document.querySelector('.mpassword').value
        };
        console.log(data);
        axios.post("/member/getmember",data)
             .then((res)=>{
                console.log(res.data);
                if(res.data === 1 ){
                    alert("로그인에 성공하셨습니다.");
                    window.location.href="/";
                }else if(res.data === 2 ){
                    alert("패스워드가 틀렸습니다.");
                }else{
                    alert("아이디가 없습니다.");
                }
        })
   }

    return (
        <div className="loginComponent">
           <h3 className="loginTitle">로그인</h3>
             { /* <span className="loginIdContext">이메일 : </span>*/}<input type="text" className="memail" placeholder="your Email"/><br/>
               {/*<span className="loginPwdContext">비밀번호 : </span>*/}<input type="password" className="mpassword" placeholder="your Password"/><br/>
               <input type="submit" value="로그인" onClick={loginMember} />
        </div>
    )
}