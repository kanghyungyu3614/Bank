import React, {useState, useEffect} from "react";
import Styles from '../css/Signup.css';
import axios from "axios";

export default function Signup() {
    /*아이디 mid , 비밀번호 mpw , 전화번호 mphone , 주민번호 msno, 이름 mname , 주소 madress*/

    const [ form ,setForm ] = useState({
        mid :'',    // 아이디
        mpw :'',    // 비번
        mpwc : '',  // 비밀번호 확인
        mphone :'', // 핸드폰번호
        memail :'',
        msno :'',   // 주민번호
        mname :'',  // 이름
        madress :'',// 주소
    }); //form 객체 자체에 Hook 설정

    const signUp = () => { // controller 통신 메소드

        let bankform = document.querySelector('.bankform');
        let formdata = new FormData( bankform );

        console.log(formdata.mid)
        axios
            .post("/member/signup/" , formdata , { headers: { 'Content-Type': 'multipart/form-data'  } }  )
            .then( res => {
                console.log( res.data )
                if( res.data == true ){ alert('회원가입성공'); }
                else{ alert('회원가입 실패 '); }
            })
            .catch( err => { console.log( err ); } )
    }

    return (
        <div>
            <h3 className="top_title "> Welcome_<br/>
                Team_Bank</h3>
            <form className="bankform">

                <label className="text-bg-center" >👉아이디</label>
                <input type="text" value={form.mid} onChange={e=>setForm({...form,mid:e.target.value})} />

                <label className="text-bg-center" >👉비밀번호</label>
                <input type="password" value={form.mpw} className="form-control" name="mpw" />
                <label className="text-bg-center" >👉비밀번호 확인</label>
                <input type="password" value={form.mpwc} className="form-control" name="mpw" />

                <label className="text-bg-center" >👉전화번호</label>
                <input type="text" value={form.mphone} className="form-control " name="mphone"/>

                <label className="text-bg-center" >👉이메일</label>
                <input type="email" value={form.memail} className="form-control " name="memail"/>

                <label className="text-bg-center" >👉주민번호</label>
                <input type="text" value={form.msno} className="form-control " name="msno"/>

                <label className="text-bg-center" >👉이름</label>
                <input type="text" value={form.mname} className="form-control " name="mname"/>

                <label className="text-bg-center" >👉주소</label>
                <input type="text" value={form.madress}  className="form-control " name="madress" />

                <button type="button" onClick={signUp}>Go</button>
            </form>
        </div>
    );
}