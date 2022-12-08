import React , { useState } from 'react';
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
              <h2>계좌</h2>
                   <div className="inputsize">
                      { isclick && <input type="text" className="ainput" placeholder="account number" /> }
                    </div>

                  { isclick? (<button onClick={send}>닫기</button>)
                    :
                    (<button onClick={send}>계좌입력</button>)
                  }

                  {isclick && <button onClick={ainsert} >송금하기</button>}
              <div>
               <h3>최근거래내역</h3>
                   <div className="nowbill">
                      <li>계좌1</li>
                      <li>계좌2</li>
                      <li>계좌3</li>
                   </div>
              </div>
        </div>
            <div className="acdate">
              <h3>날짜별 거래내역</h3>

                <div className="calender">
                        <Calendar
                         onChange={onChange}
                          value={value}
                          />
                </div>

             </div>


    </div>
    );
}