import React, {useState} from "react";
import axios from "axios";
import "../css/Signup.css"
import DaumPostcode from "react-daum-postcode";

export default function Signup(props) {

    /*===========================주소API========================================*/
    const Post = (props) => {

        const complete = (data) =>{
            let fullAddress = data.address;
            let extraAddress = '';

            if (data.addressType === 'R') {
                if (data.bname !== '') {
                    extraAddress += data.bname;
                }
                if (data.buildingName !== '') {
                    extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
                }
                fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
            }
            console.log(data)
            console.log(fullAddress)
            console.log(data.zonecode)

            props.setcompany({
                ...props.company,
                address:fullAddress,
            })
        }

        return (
            <div >
                <DaumPostcode
                    className="postmodal"
                    autoClose
                    onComplete={complete} />
            </div>
        );
    };


    const [enroll_company, setEnroll_company] = useState({
        address:'',
    });

    let [popup, setPopup] = useState(false);

    const handleInput = (e) => {
        setEnroll_company({
            ...enroll_company,
            [e.target.name]:e.target.value,

        })
    }

    const handleComplete = (data) => {
        setPopup(!popup);
        let user_enroll_text=document.querySelector('.user_enroll_text')
        console.log(user_enroll_text.value)
        if(user_enroll_text.value!=null){
        setPopup(!popup);
        }
    }

    /*===========================================================================*/
    const signUp = () => {


        axios
            .post("/member/signup/", form, {headers: {'Content-Type': 'multipart/form-data'}})
            .then(res => {
                console.log(res.data)
                if (res.data === true) {
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
    })

    const [confirm, setConfirm] = useState({ // form의 input의 객체값이 전부 true여야 통과
        midc: false,
        mpwc: false,
        mpwconfirmc: false,
        mphonec: false,
        msnoc: false,
        mnamec: false,
    })

    const midform = /^[A-Za-z0-9$@!%*#?&]{6,15}$/; // 정규표현식 아이디[ 2022-12-16 김원종 ]
    const mpwform = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@!%*?&])[A-Za-z\d@!%*?&]{8,15}$/ // 정규표현식 비밀번호[ 2022-12-16 김원종 ]
    const emailform = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/// 정규표현식 이메일[ 2022-12-16 김원종 ]
    const phoneform = /^\d{3}-\d{3,4}-\d{4}$/;// 정규표현식 휴대폰[ 2022-12-16 김원종 ]
    const msnoform = /^(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))[1-4][0-9]{6}$/ // 정규표현식 주민번호[ 2022-12-16 김원종 ]
    const mnameform = /^[가-힣a-zA-Z]{2,20}$/;// 정규표현식 이름[ 2022-12-16 김원종 ]


    const midcheck = (e) => { /*아이디 검사 [ 2022-12-16 ] 김원종 */
        console.log(e.target.value)

        setForm({...form, mid: e.target.value})

        if (midform.test(e.target.value)) {
            document.querySelector('.idbox').innerHTML = "🌝사용가능한 아이디입니다🌝"
            confirm.midc = true;
            setForm({...form, mid: e.target.value})
        } else {
            document.querySelector('.idbox').innerHTML = "사용불가능"
        }
    }
    const pwcheck = (e) => { /*비밀번호 검사 [ 2022-12-16 ] 김원종*/

        setForm({...form, mpw: e.target.value})
        if (mpwform.test(e.target.value)) {
            document.querySelector('.pwbox').innerHTML = "👌사용가능한 비밀번호입니다."
            confirm.mpwc = true;
            setForm({...form, mpw: e.target.value})
        } else {
            document.querySelector('.pwbox').innerHTML = "🔓사용불가능한 비밀번호입니다.<br>" +
                "최소 8 자 및 최대 10 자, 대문자 하나 이상, 소문자 하나, 숫자 하나 및 특수 문자 하나 이상으로 작성해주세요!"
        }
    }
    const pwfirmcheck = (e) => {/*비밀번호 확인 [2022-12-16] 김원종 */
        setForm({...form, mpwconfirm: e.target.value})

        let pwchbox = document.querySelector('.pwchbox')
        if (form.mpw === e.target.value) {
            pwchbox.innerHTML = "👀비밀번호가 일치합니다👀"
            confirm.mpwconfirmc = true;
            setForm({...form, mpwconfirm: e.target.value})
        } else {
            pwchbox.innerHTML = "😨입력하신 비밀번호와 다릅니다!!다시 확인해주세요!!"
        }
    }
    const phonecheck = (e) => {/*전화번호 확인 [2022-12-16] 김원종 */
        setForm({...form, mphone: e.target.value})
        console.log(e.target.value)
        let phckbox = document.querySelector('.phckbox')
        if (phoneform.test(e.target.value)) {
            phckbox.innerHTML = "📞올바른 형식입니다><"
            confirm.mphonec = true;
            setForm({...form, mphone: e.target.value})
        } else {
            phckbox.innerHTML = "올바른 전화번호 형식이 아닙니다!!"
        }
    }
    const msnocheck = (e) => {/*주민번호 확인 [2022-12-16] 김원종 */
        setForm({...form, msno: e.target.value})
        console.log(e.target.value)
        let msnockbox = document.querySelector('.msnockbox')
        if (msnoform.test(e.target.value)) {
            msnockbox.innerHTML = "👌올바른 형식입니다.👌"
            confirm.msnoc = true;
            setForm({...form, msno: e.target.value})
        } else {
            msnockbox.innerHTML = "형식이 맞지 않습니다!"
        }
    }

    const mnamecheck = (e) => {/*이름 확인 [2022-12-16] 김원종 */
        setForm({...form, mname: e.target.value})
        console.log(e.target.value)
        let mnameckbox = document.querySelector('.mnameckbox')
        if (mnameform.test(e.target.value)) {
            mnameckbox.innerHTML = "반가워요 멋진 이름이네요!🙌"
            confirm.mnamec = true;
            setForm({...form, mname: e.target.value})
        } else {
            mnameckbox.innerHTML = "나라가 어디신가요..?😳관리자에게 문의해주세요..ㅠㅠ"
        }
    }

        return (
            <div>
                <h3 className="top_title "> Welcome_<br/>
                    Team_Bank</h3>
                <form className="bankform">
                    <label className="text-bg-center">👉아이디[ 영대소문자,특수문자,숫자 포함 6~15자리로 작성해주세요😀]</label>
                    <input type="text" name="mid" value={form.mid} className="form-control"
                           onChange={(e) => midcheck(e)}/>
                    <div>
                        <span className="idbox"></span>
                    </div>
                    <label className="text-bg-center">👉비밀번호 [최소 8 자 및 최대 10 자, 대문자 하나 이상, 소문자 하나, 숫자 하나 및 특수 문자 하나 이상으로
                        작성해주세요😁]</label>
                    <input type="text"
                           className="form-control" value={form.mpw} name="mpw" onChange={(e) => pwcheck(e)}/>
                    <div>
                        <span className="pwbox"></span>
                    </div>

                    <label className="text-bg-center">👉비밀번호확인</label>
                    <input type="text"
                           className="form-control" value={form.mpwconfirm} name="mpwconfirm"
                           onChange={(e) => pwfirmcheck(e)}/>
                    <div>
                        <span className="pwchbox"></span>
                    </div>

                    <label className="text-bg-center">👉전화번호</label>
                    <input type="text" value={form.mphone}
                           className="form-control " name="mphone" onChange={(e) => phonecheck(e)}/>
                    <div>
                        <span className="phckbox"></span>
                    </div>

                    <label className="text-bg-center">👉주민번호[ - 을 제외하고 적어주세요 ]</label>
                    <input type="password" value={form.msno}
                           className="form-control " name="msno" onChange={(e) => msnocheck(e)}/>
                    <div>
                        <span className="msnockbox"></span>
                    </div>
                    <label className="text-bg-center">👉이름</label>
                    <input type="text" value={form.mname}
                           className="form-control " name="mname" onChange={(e) => mnamecheck(e)}/>
                    <div>
                        <span className="mnameckbox"></span>
                    </div>

                    <label className="text-bg-center">👉주소</label> {/*2022-12-19 김원종 주소 api 구현중*/}
                    <div className="address_search" >
                        <input className="form-control user_enroll_text" placeholder="주소"  type="text" required={true} name="address" onChange={handleInput} value={enroll_company.address}/>
                        <button onClick={handleComplete}>우편번호 찾기</button>
                        {popup && <Post company={enroll_company} setcompany={setEnroll_company} />}
                    </div>


                 {/*   {openPostcode &&
                        <DaumPostcode
                            onComplete={handle.selectAddress}  // 값을 선택할 경우 실행되는 이벤트
                            autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
                            defaultQuery='판교역로 235' // 팝업을 열때 기본적으로 입력되는 검색어
                        />}*/}

                    <button type="button" onClick={signUp}>Go</button>
                </form>
            </div>
        );
    }

