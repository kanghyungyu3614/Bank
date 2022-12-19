import React, {useState, useEffect} from "react";
import axios from "axios";

export default function Signup(prop) {

    const signUp = () => {


        axios
            .post("/member/signup/", form, {headers: {'Content-Type': 'multipart/form-data'}})
            .then(res => {
                console.log(res.data)
                if (res.data == true) {
                    alert('회원가입성공');
                } else {
                    alert('회원가입 실패 ');
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    const [form, setForm] = useState({ // form의 input을 객체로 묶음
        mid: '',
        mpw: '',
        mpwconfirm: '',
        mphone: '',
        msno: '',
        mname: '',
        madress: ''
    })

    const [confirm, setConfirm] = useState({ // form의 input의 객체값이 전부 true여야 통과
        midc: false,
        mpwc: '',
        mpwconfirmc: '',
        mphonec: '',
        msnoc: '',
        mnamec: '',
        madressc: ''
    })

    const midform = /^[A-Za-z0-9$@!%*#?&]{6,15}$/; // 정규표현식 아이디
    const mpwform = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d@!%*?&]{8,15}$/

    const midcheck = (e) => { /*아이디 검사 김원종 */
        console.log(e.target.value)
        if (midform.test(e.target.value)) {
            document.querySelector('.idbox').innerHTML = "🌝사용가능한 아이디입니다🌝"
            confirm.midc = true;
            console.log(confirm.midc)
        } else {
            document.querySelector('.idbox').innerHTML = "사용불가능"
            return false;
        }
    }
    const pwcheck = (e) => { /*비밀번호 검사 김원종*/
        console.log(e.target.value)
        if (mpwform.test(e.target.value)) {
            document.querySelector('.pwbox').innerHTML = "👌사용가능한 비밀번호입니다."
            confirm.mpwc = true;
            console.log(confirm.midc)
        } else {
            document.querySelector('.pwbox').innerHTML = "🔓사용불가능한 비밀번호입니다.<br>" +
                "최소 8 자 및 최대 10 자, 대문자 하나 이상, 소문자 하나, 숫자 하나 및 특수 문자 하나 이상으로 작성해주세요!"
            return false;
        }
    }
   /* const pwfirmcheck = (e) => {
        alert(form.mpw)
        if (form.mpw==e.target.value) {
            document.querySelector('.pwchbox').innerHTML = "👌."
            confirm.mpwconfirmc = true;
            console.log(confirm.mpwconfirmc)
        } else {
            document.querySelector('.pwchbox').innerHTML = "🔓"
            return false;
        }
    }*/
    return (
        <div>
            <h3 className="top_title "> Welcome_<br/>
                Team_Bank</h3>
            <form className="bankform">
                <label className="text-bg-center">👉아이디</label>
                <input type="text" name="mid" className="form-control" onChange={(e) => midcheck(e)}/>
                    <div>
                    <span className="idbox"></span>
                    </div>
                <label className="text-bg-center">👉비밀번호</label>
                <input type="text"
                       className="form-control" name="mpw" onChange={(e)=>pwcheck(e)}/>
                <div>
                    <span className="pwbox"></span>
                </div>

                <label className="text-bg-center">👉비밀번호확인</label>
                <input type="text" className="form-control" name="mpw" />
                <div>
                    <span className="pwchbox"></span>
                </div>

                <label className="text-bg-center">👉전화번호</label>
                <input type="text" value={form.mphone}
                       className="form-control " name="mphone" onChange={e => setForm({...form, mphone: e.target})}/>

                <label className="text-bg-center">👉주민번호</label>
                <input type="text" value={form.msno}
                       className="form-control " name="msno" onChange={e => setForm({...form, msno: e.target})}/>

                <label className="text-bg-center">👉이름</label>
                <input type="text" value={form.mname}
                       className="form-control " name="mname" onChange={e => setForm({...form, mname: e.target})}/>

                <label className="text-bg-center">👉주소</label>
                <input type="text" value={form.madress}
                       className="form-control " name="madress" onChange={e => setForm({...form, madress: e.target})}/>

                <button type="button" onClick={signUp}>Go</button>
            </form>
        </div>
);
}

