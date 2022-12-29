import React , { useState ,useEffect , } from 'react';
import styles from './account.css'
import axios from 'axios';
import {useParams} from 'react-router-dom';
import Calendar from 'react-calendar'; // 캘린더 npm i react-calendar
import 'react-calendar/dist/Calendar.css'; // css import
{/*import styles from '../css/account.css' */}
export default function Account(props) {


    const [cclick , setCcLick ] = useState( 1 );
    const [bank ,setBank] = useState("");
    const [ainput ,setAinput] = useState("");
    const [sendview , setSendview] = useState(false);
    const [value,onChange] = useState(new Date());

    const params = useParams();
    const [statech ,setStatech] = useState(1);
    const[mastercheck ,setMastercheck] = useState([]);
    const [account,setAccount] = useState({})
    const [dealview , setDealview] = useState([]);
    const [finalpay , setFinalpay] = useState(0); // 보안카드 난수 일치후에 상대방에게 돈을 담아서 보내줄 훅
    const sendpay = () => { // 1. 송금버튼 2->3
        setStatech(2);
        setCcLick(0);
    }



    const send1 = () => { // 3. 계좌입력버튼    1-2
    setCcLick(2)
    }

    const send2 = () => { // 3. 닫기버튼    2->1
        setCcLick(1)

    }

    const ainsert =() =>{
        const bank =  document.querySelector(".bank").value
        const ainput = document.querySelector(".ainput").value
        setAccount({accountnum:ainput})

     axios
        .get("/bank/memberaccount",{params : {ainput : ainput , bank : bank}})
         .then(res=>{if(res.data == false){
            console.log(res.data)
            console.log(res)
            alert("일치하는 계좌가 없습니다")
         }else{
           alert("계좌가 확인되었습니다.")
            setCcLick(3);
            }
         })
        .catch(err => {console.log(err)})
    }

    const bsecurity = ()=>{
        console.log(account);
                    let SecuritySubNumberArray = [];
                    let Coma = ''

        axios
             .post("/bank/securityCardnum" , { acno :  account.accountnum})
             .then(res=>{
                console.log(res.data[0].ssno)
            if(res.data[0].ssno.length>0){
                Coma = res.data[0].ssno;
                for(let i = 0; i<Coma.length; i++) {
                        if(i<35) {
                        // StringBuffer랑 String 은 자료형이 다르기 때문에 StringBuffer에 .toString()이 필요합니다.
                                          // 2자리 + " " + 2자리 를 합친 문자열을 subarr라는 ArrayList에 넣어줍니다.
                        SecuritySubNumberArray[i]=  Coma.substring(4*i,2+4*i)+" "+Coma.substring(2+4*i,4+4*i);
                         }
                     }
                      console.log(Coma)
                      console.log(SecuritySubNumberArray)

                     }
                      bsecurityChoiceNum(SecuritySubNumberArray)
                })
             }

            /*const sendmoney =()=>{
                const payinsert = document.querySelector(".payinsert").value;
                axios
                    .get("/bank/accountinsert" ,{params : {pay : payinsert , account : account.accountnum , type : 1}})
                    .then(res=>{if(res.data == true){
                        alert("입금완료")
                    }else{
                         alert("입금실패[관리자에게 문의]")
                    }
                  })
                    .catch(err => {console.log(err)})
            }*/
            let data ;
            useEffect( ()=>{
                axios
                    .get("/bank/dealview" )
                    .then(res=>{console.log(res);
                        data = res.data;
                        setDealview(res.data);}
                    )
            } , [] )


          // 달력 시작

                const onchange2 =( value )=>{
                        onChange(value)
                       console.log(value)
                       console.log(value.getMonth())
                       console.log(value.getDate())
                       console.log(value.getFullYear())
                       let value2 = `${value.getFullYear()}-${value.getMonth()+1}-${value.getDate()}`
                        console.log(value2)
                         axios.post("/bank/dateview", {cdate : value2})
                         .then(res => {console.log(res.data);
                                setMastercheck(res.data);

                            })
                        }













    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

        function bsecurityChoiceNum (SecurityArr){
            // 보안카드 배열을 가지고 옵니다.
            console.log(SecurityArr)
            let Seat1 = Math.floor(getRandomArbitrary(1, 35))
            let Seat2 = Math.floor(getRandomArbitrary(1, 35))
            // 랜덤 자리수를 출력해줍니다.
            console.log(Seat1 + " : 자리수")
            console.log(Seat2 + " : 자리수")
            // 보안카드 입력 숫자
            console.log("보안카드에는 어떻게 입력되어 있을까요?")
            console.log(SecurityArr[Seat1-1])
            console.log(SecurityArr[Seat2-1])
            console.log("보안카드에는 어떻게 입력되어 있을까요?")

            let resultNumber1 = prompt(`${Seat1} 두자리를 입력해주세요.`);
            let resultNumber2 = prompt(`${Seat2}뒤 두자리를 입력해주세요.`);
            // 보안카드 배열을 가져옵니다.
            console.log("SecurityArr")
            console.log(resultNumber1)
            console.log(resultNumber2)
            console.log("SecurityArr")

            //
            if(SecurityArr[Seat1-1].substring(0,2) === resultNumber1 && SecurityArr[Seat2-1].substring(3,5) === resultNumber2){
                alert("보안카드 번호가 일치합니다. 완료버튼을 눌러주세요.");
                setFinalpay(document.querySelector(".payinsert").value);
                setStatech(3);
            }else{
                alert("번호가 일치하지 않습니다. 5회 이상 일치하지 않으면 계좌가 잠깁니다.");
            }
        }

        function finalEnter (){
            let data = { acno2 : account.accountnum , bmoney : finalpay , btypes : 1 , bcontent : "예금" };
            console.log("data");
            console.log(data);
            console.log("data");
            setAinput(finalpay); // 거래금액이 바뀐다.
            axios.post("/bank/sendHistory",data).then((res)=>{
                console.log("res.data");
                console.log(res.data);
                console.log("res.data");
                if(res.data == 1){
                    alert("거래가 완료되었습니다.")
                }else if(res.data == 2){
                    if(finalpay<0){
                      alert("거래금액이 부족합니다.");
                    }else{
                      alert("통장잔고가 부족합니다.");
                    }
                }
                setCcLick(1);
                setStatech(1);
            })
        }


        console.log(dealview)


   /* 계좌 조회가 우선 계좌입력 예금주있으면 true  | true일시 변화 -> 금액 입력창 나오게 */
    return(
    <div className="main">
        <div className="sub">
              <div className="inputside">
                 <h5><div className="sendpayaccunt"> 입금예정 계좌 {account.accountnum == "" ? "계좌가 없습니다." : account.accountnum}</div> </h5>
                 <h5 className="sendpay">{finalpay == "" ? "" :  "송금된 금액 : "+finalpay.toLocaleString() } </h5>
                 <div className="inputsize">

                      { cclick == 1 && <button onClick={send1} className="accinput">계좌입력</button>  }


                         { cclick == 2 && (
                            <>
                            <th>
                              <td><select className="bank"><option value="기업">기업</option><option value="신협">신협</option><option value="카뱅">카뱅</option></select></td>
                                <td><input type="text" className="ainput" placeholder="계좌번호"/> </td>
                                <td><input type="text" className="master" placeholder="예금주" readonly="readonly" value=""/> </td>
                                <td><button type="button" className="mastercheck"  onClick={ainsert}>확인</button></td>
                            </th>

                            <button onClick={send2} className="close">닫기</button>

                            </>
                            )
                         }

                    </div>

                      {cclick ==3 &&(
                            <>
                             <button className="closinsert" onClick={sendpay}>금액 입력</button>
                            </>
                        )}

                       { statech == 2 && (
                     <>
                     <input type="text" className="payinsert" placeholder="금액입력"/>
                      <button type="button" className="safecard"onClick={bsecurity}>보안카드입력</button>
                      </>
                        )
                      }
                    { statech == 3 && (
                     <>
                     <button type="button" onClick={finalEnter} >완료</button>
                      </>
                        )
                      }


              </div>
               <div className="aside_box">
                    <h4>최근 거래 은행(클릭시 그은행 거래나옴)</h4>
                      <div className="aside_main">
                     <input type="checkbox" name="xxx" value="yyy"/> 카뱅
                     <input type="checkbox" name="xxx" value="yyy"/> 신협
                     <input type="checkbox" name="xxx" value="yyy"/> 농협
                     <input type="checkbox" name="xxx" value="yyy"/> 우리은행
                    </div>
               </div>

              <div className="deal">
               <h3>최근거래내역</h3>
                   <div className="nowbill">
                      {
                            dealview.map( ( el )=>{
                                return(
                                <ul>
                                     <li>{el.mname2}</li>
                                     <li>{el.bmoney}</li>
                                     <li>{el.bcontent}</li>
                                 </ul>
                                 );
                             } )
                      }
                   </div>
              </div>
              <div>
                $ecurity_bank
              </div>
        </div>
            <div className="acdate">
                <div className="datebill">
                     <h3>날짜별 거래내역</h3>
                </div>
                <div className="calender">
                        <Calendar
                            onChange={ onchange2 }
                            value={value}
                         />
                </div>
                <div className="billdate">
                    <h1>거래별 날짜 자리</h1>
                    <div className="billcontent">


                      {
                        mastercheck.map((el)=>{

                            return(
                            <ul>
                                  <li>{el.cdate}</li>
                                  <li>{el.mname2}</li>
                                  <li>{el.bcontent}</li>
                                  <li>{el.bmoney}</li>
                           </ul>
                              );
                             })
                        }

                     </div>
             </div>
         </div>
    </div>
    );
}