import React , { useState , useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import styles from './account.css'
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



    const [value,onChange] = useState(new Date());

    const ainsert =() =>{
      let ainput = document.querySelector(".ainput").value;
    alert(ainput);
    }

    return(
    <div className="main">
        <div className="sub">
              <div className="inputside">

                <h2>입금 계좌</h2>

                   <div className="inputsize">
                        <th>
                          <td>{ isclick && <select className="bank"><option>기업</option><option>신협</option><option>카뱅</option></select>}</td>
                            <td>{ isclick && <input type="text" className="ainput" placeholder="계좌번호" /> }</td>
                            <td>{ isclick &&  <input type="text" className="master" placeholder="예금주" readonly="readonly"/> }</td>
                        </th>
                    </div>

                  { isclick? (<button onClick={send} className="close">닫기</button>)
                    :
                    (<button onClick={send} className="accinput">계좌입력</button>)
                  }

                  {isclick && <button onClick={ainsert} className="closinsert">송금하기</button>}
              </div>
               <div className="aside_box">
                    <h4>최근 거래 은행(클릭시 그은행 거래나옴)</h4>
                    <input type="checkbox" name="xxx" value="yyy"/> 카뱅
                     <input type="checkbox" name="xxx" value="yyy"/> 신협
                     <input type="checkbox" name="xxx" value="yyy"/> 농협
                     <input type="checkbox" name="xxx" value="yyy"/> 우리은행

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
                         onChange={onChange}
                          value={value}
                          />
                </div>
                <div className="billdate">
                    <h1>거래별 날짜 자리</h1>
                     <li>2022-10-10 전상근 10,000</li>
                      <li>2022-10-10 전상근 10,000</li>
                     <li>2022-10-10 전상근 10,000</li>
                         <li>2022-10-10 전상근 10,000</li>
                       <li>2022-10-10 전상근 10,000</li>
                </div>

             </div>


    </div>
    );
}