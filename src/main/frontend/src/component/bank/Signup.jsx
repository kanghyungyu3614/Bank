import React, {useState, useEffect} from "react";
import Styles from '../css/Signup.css';
import axios from "axios";

export default function Signup() {

    const signUp = () => {

        let info = {    // 2. 입력받은 값 가져오기
            mid : document.querySelector('.mid').value ,
            mpw : document.querySelector('.mpw').value ,
            mphone : document.querySelector('.mphone').value,
            msno : document.querySelector('.msno').value ,
            madress : document.querySelector('.madress').value ,
            mname : document.querySelector('.mname').value
        }

            axios
                .post("/member/signup",info)
                .then(res => {
                    let result = res.data;
                    console.log(result);
                })

    }

    return (
        <div>
            <h3 className="top_title "> Welcome_<br/>
                Team_Bank</h3>
            <form className="ssd">
                <label className="text-bg-center" >👉아이디</label>
                <input type="text" className="form-control mid"  />

                <label className="text-bg-center" >👉비밀번호</label>
                <input type="text" className="form-control mpw" />

                <label className="text-bg-center" >👉전화번호</label>
                <input type="text" className="form-control mphone" />

                <label className="text-bg-center" >👉주민번호</label>
                <input type="text" className="form-control msno"/>

                <label className="text-bg-center" >👉이름</label>
                <input type="text" className="form-control mname"/>

                <label className="text-bg-center" >👉주소</label>
                <input type="text" className="form-control madress" />

                <button type="button" onClick={signUp}>Go</button>
            </form>
        </div>

    );
}