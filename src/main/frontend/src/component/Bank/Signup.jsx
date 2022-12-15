import React, {useState, useEffect} from "react";
import Styles from '../css/Signup.css';
import axios from "axios";

export default function Signup() {

    const signUp = () => {

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
                <input type="text" className="form-control" name="mid"  />

                <label className="text-bg-center" >👉비밀번호</label>
                <input type="text" className="form-control" name="mpw" />

                <label className="text-bg-center" >👉전화번호</label>
                <input type="text" className="form-control " name="mphone"/>

                <label className="text-bg-center" >👉주민번호</label>
                <input type="text" className="form-control " name="msno"/>

                <label className="text-bg-center" >👉이름</label>
                <input type="text" className="form-control " name="mname"/>

                <label className="text-bg-center" >👉주소</label>
                <input type="text" className="form-control " name="madress" />

                <button type="button" onClick={signUp}>Go</button>
            </form>
        </div>
    );
}