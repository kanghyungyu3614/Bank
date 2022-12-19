import React , { useState } from 'react';
import styles from './account.css'
import axios from 'axios';
import {useParams} from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
{/*import styles from '../css/account.css' */}
export default function Account(props) {

    const [ isclick , setIsclick ]  = useState( false );
    const [cclick , setCcLick ] = useState( false );

    const Cview = () =>{
        if(cclick){setCcLick(false);}
        else{setCcLick(true);}
    }

    const send = () => {
        if( isclick ){ setIsclick( false ); }
        else{ setIsclick( true) }

    }
    const[mastercheck ,setMastercheck] = useState('');

    const [value,onChange] = useState(new Date());

/*
   const onchange2 = ( value ) => {
        onChange(value)
       axios.get("",{params : {date : value}})
            .then(res => {bankacciunt(res.data)})
    }*/

    const ainsert =() =>{
      let data = {
             ainput : document.querySelector(".ainput").value,
             bank: document.querySelector(".bank").value
        }
     axios
        .post("/bank/memberaccount", data)
         .then(res=>{if(res.data == false){
            document.querySelector(".master").value = "김경주"

         }})
        .catch(err => {console.log(err)})
    }
   /* 계좌 조회가 우선 계좌입력 예금주있으면 true  | true일시 변화 -> 금액 입력창 나오게 */
    return(
    <div className="main">
        <div className="sub">
              <div className="inputside">
                <h2>입금 계좌</h2>

                   <div className="inputsize">
                        <th>
                          <td>{ isclick && <select className="bank"><option value="기업">기업</option><option value="신협">신협</option><option value="카뱅">카뱅</option></select>}</td>
                            <td>{ isclick && <input type="text" className="ainput" placeholder="계좌번호" /> }</td>
                            <td>{ isclick &&  <input type="text" className="master" placeholder="예금주" readonly="readonly" value=""/> }</td>
                            <td>{ isclick && <button type="button" className="mastercheck"  onClick={ainsert}>확인</button>}</td>
                        </th>
                    </div>
                  { isclick? (<button onClick={send} className="close">닫기</button>)
                    :
                    (<button onClick={send} className="accinput">계좌입력</button>)
                  }

                  {isclick && <button className="closinsert">송금하기</button>}
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
                      <li>2022-10-10 전상근 10,000</li>
                      <li>2022-10-10 전상근 10,000</li>
                      <li>2022-10-10 전상근 10,000</li>
                      <li>2022-10-10 전상근 10,000</li>
                      <li>2022-10-10 전상근 10,000</li>

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
                            onChange={ onChange }
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