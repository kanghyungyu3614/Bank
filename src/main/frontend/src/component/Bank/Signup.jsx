import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import "../css/Signup.css"
import DaumPostcode, {useDaumPostcodePopup} from "react-daum-postcode";
import DaumPostcodeEmbed from "react-daum-postcode";


export default function Signup(props) {

    /*===========================주소API========================================*/
    const [address, setAddress] = useState({name: ''})
    const open = useDaumPostcodePopup("//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js")

    const handleClick = () => {
        open({onComplete: handleComplete});
    };

    const handleComplete = (data) => {

        axios.get("https://dapi.kakao.com/v2/local/search/address.json?query=" + data.address
            , {headers: {Authorization: 'KakaoAK b9157166d1587f60a8ff9bf7e7c9a4f1'}})
            .then(res => {
                const location = res.data.documents[0]
                console.log("확인하자")
                console.log(location)
                //5. State 업데이트
                setAddress({name: data.address, lat: location.y, lng: location.x})
                setForm({...form, name: data.address})
            })
    };
    /*===========================================================================*/
    /*카카오 주소 api*/

    function sample6_execDaumPostcode() {
        new daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var addr = ''; // 주소 변수
                var extraAddr = ''; // 참고항목 변수

                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                }

                // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                if(data.userSelectedType === 'R'){
                    // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                    // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                    if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                        extraAddr += data.bname;
                    }
                    // 건물명이 있고, 공동주택일 경우 추가한다.
                    if(data.buildingName !== '' && data.apartment === 'Y'){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                    if(extraAddr !== ''){
                        extraAddr = ' (' + extraAddr + ')';
                    }
                    // 조합된 참고항목을 해당 필드에 넣는다.
                    document.getElementById("sample6_extraAddress").value = extraAddr;

                } else {
                    document.getElementById("sample6_extraAddress").value = '';
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('sample6_postcode').value = data.zonecode;
                document.getElementById("sample6_address").value = addr;
                // 커서를 상세주소 필드로 이동한다.
                document.getElementById("sample6_detailAddress").focus();
            }
        }).open();
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
        madressc: false,
    })

    const midform = /^[A-Za-z0-9$@!%*#?&]{6,15}$/; // 정규표현식 아이디[ 2022-12-16 김원종 ]
    const mpwform = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@!%*?&])[A-Za-z\d@!%*?&]{8,15}$/ // 정규표현식 비밀번호[ 2022-12-16 김원종 ]
    const emailform = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/// 정규표현식 이메일[ 2022-12-16 김원종 ]
    const phoneform = /^\d{3}-\d{3,4}-\d{4}$/;// 정규표현식 휴대폰[ 2022-12-16 김원종 ]
    const msnoform = /^(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))[1-4][0-9]{6}$/ // 정규표현식 주민번호[ 2022-12-16 김원종 ]
    const mnameform = /^[가-힣a-zA-Z]{2,20}$/;// 정규표현식 이름[ 2022-12-16 김원종 ]

    console.log(confirm)
    const midcheck = (e) => { /*아이디 검사 [ 2022-12-16 ] 김원종 */

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
        console.log(form.mpw)
        console.log(e.target.value)
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
        let mnameckbox = document.querySelector('.mnameckbox')
        if (mnameform.test(e.target.value)) {
            mnameckbox.innerHTML = "반가워요 멋진 이름이네요!🙌"
            confirm.mnamec = true;
            setForm({...form, mname: e.target.value})
        } else {
            mnameckbox.innerHTML = "나라가 어디신가요..?😳관리자에게 문의해주세요..ㅠㅠ"
        }
    }


    const madresscheck = (e) => {
        console.log(".....////////////////////////////")
        // let test = document.querySelector('.madress').value
        console.log(e.target.value)
        if (e.target.value != null) {
            confirm.madressc = true;
        } else {
            alert("주소값을 입력해주세요")
        }
    }

    // useEffect(madresscheck ,[asd])


    return (
        <div>
            <form className="bankform">
                <label className="text-bg-center" style={{color: "white"}}>👉아이디[ 영대소문자,특수문자,숫자 포함 6~15자리로
                    작성해주세요😀]</label>
                <input type="text" name="mid" maxLength="15" value={form.mid} className="form-control"
                       onChange={(e) => midcheck(e)}/>
                <div>
                    <span className="idbox"></span>
                </div>
                <label className="text-bg-center" style={{color: "white"}}>👉비밀번호 [최소 8 자 및 최대 10 자, 대문자 하나 이상, 소문자 하나,
                    숫자 하나 및 특수 문자 하나 이상으로
                    작성해주세요😁]</label>
                <input type="password"
                       maxLength="15" className="form-control" value={form.mpw} name="mpw"
                       onChange={(e) => pwcheck(e)}/>
                <div>
                    <span className="pwbox"></span>
                </div>

                <label className="text-bg-center" style={{color: "white"}}>👉비밀번호확인</label>
                <input type="password"
                       className="form-control" value={form.mpwconfirm} name="mpwconfirm"
                       onChange={(e) => pwfirmcheck(e)}/>
                <div>
                    <span className="pwchbox"></span>
                </div>

                <label className="text-bg-center" style={{color: "white"}}>👉전화번호</label>
                <input type="text" value={form.mphone}
                       className="form-control " name="mphone" maxLength="13" onChange={(e) => phonecheck(e)}/>
                <div>
                    <span className="phckbox"></span>
                </div>

                <label className="text-bg-center" style={{color: "white"}}>👉주민번호[ - 을 제외하고 적어주세요 ]</label>
                <input type="password" value={form.msno}
                       className="form-control " name="msno" maxLength="13" onChange={(e) => msnocheck(e)}/>
                <div>
                    <span className="msnockbox"></span>
                </div>
                <label className="text-bg-center" style={{color: "white"}}>👉이름</label>
                <input type="text" value={form.mname}
                       className="form-control " name="mname" onChange={(e) => mnamecheck(e)}/>
                <div>
                    <span className="mnameckbox"></span>
                </div>
                {/*주소 ifram 방식으로 변경 2022-12-21 김원종 */}
                <label className="text-bg-center"
                       style={{color: "white"}}>👉주소</label><br/>{/*2022-12-19 김원종 주소 api 구현중*/}
                <input type="text" id="sample6_postcode" placeholder="우편번호"/>
                <input type="button" onClick={sample6_execDaumPostcode} value="우편번호 찾기"/><br/>
                <input type="text" id="sample6_address" placeholder="주소"/><br/>
                <input type="text" id="sample6_detailAddress" placeholder="상세주소"/>
                <input type="text" id="sample6_extraAddress" placeholder="참고항목"/>
                <div ref={element_layer}
                     style={{
                         display: "none",
                         position: "fixed",
                         overflow: "hidden",
                         zIndex: "1",
                         WebkitOverflowScrolling: "touch"
                     }}>
                    <img src="//t1.daumcdn.net/postcode/resource/images/close.png=btnCloseLayer"
                         style={{cursor: "pointer", position: "absolute", right: "-3px", top: "-3px", zIndex: "1"}}
                         onClick={closeDaumPostcode} alt="닫기 버튼"></img>
                </div>

                <button type="button" onClick={signUp}>Go</button>
            </form>
        </div>
    );
}






