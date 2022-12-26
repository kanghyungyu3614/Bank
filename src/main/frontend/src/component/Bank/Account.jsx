import React , { useState ,useEffect} from 'react';
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
    const[mastercheck ,setMastercheck] = useState('');
    const [account,setAccount] = useState()
    const [dealview , setDealview] = useState([]);
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


    const sendmoney =()=>{
        const payinsert = document.querySelector(".payinsert").value;
        axios
            .get("/bank/accountinsert" ,{params : {pay : payinsert , account : account.accountnum , type : 1}})
            .then(res=>{if(res.data == true){
                alert("입금완료")
                window.location.reload();
            }else{
                 alert("입금실패[관리자에게 문의]")
            }
          })
            .catch(err => {console.log(err)})
    }
     let data ;
    useEffect( ()=>{
        axios
            .get("/bank/dealview")
            .then(res=>{console.log(res);
                data = res.data;
                setDealview(res.data);}
            )
    } , [  ] )

console.log(dealview)

  const onchange2 = ( value ) => {
        onChange(value)
       alert(value)

//       axios.get("",{params : {date : value}})
//            .then(res => {bankacciunt(res.data)})
        }




   /* 계좌 조회가 우선 계좌입력 예금주있으면 true  | true일시 변화 -> 금액 입력창 나오게 */
    return(
    <div className="main">
        <div className="sub">
              <div className="inputside">
                <h2>입금 계좌</h2>
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
                     <button type="button" onClick={sendmoney}>입금</button>
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
                1 , 2 , 3 , 4 ,5 페이징 자리 또는 스크롤 자리
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
                          <li>2022-10-10 전상근 10,000</li>
                          <li>2022-10-10 전상근 10,000</li>
                          <li>2022-10-10 전상근 10,000</li>
                          <li>2022-10-10 전상근 10,000</li>
                          <li>2022-10-10 전상근 10,000</li>
                     </div>
             </div>
         </div>
    </div>
    );
}