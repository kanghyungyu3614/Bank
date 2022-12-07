import React , { useState } from 'react';
import Calendar from 'react-calendar';


export default function Account(props) {

    const [ isclick , setIsclick ]  = useState( false );


    const send = () => {
        if( isclick ){ setIsclick( false ); }
        else{ setIsclick( true) }

    }

    const [value,onChange] = useState(new Date());

    /*const cbutton = ()=> {
        if(isclick){return "이체하기"}
         else{ return "송금하기" }
    }*/

/*
     const [ isbutton , setIsbutton ]  = useEffect( false );
     const cbutton = () => {
            if( isbutton ){ setIsbutton( "닫기" ); }
            else{ setIsbutton( "이체하기") }

        }
        */
   /* const state = () =>{return "닫기"}*/

    return(
        <div>
              <h2>계좌</h2>

                  { isclick && <input type="text"  placeholder="account number" /> }
                  { <button onClick={send}>계좌입력</button>}
                  {isclick && <button >송금하기</button>}
              <div>
               <h3>최근거래내역</h3>
                   <div>
                      <li>계좌1</li>
                      <li>계좌2</li>
                      <li>계좌3</li>
                   </div>
              </div>

              <h3>날짜별 거래내역</h3>
                <div>
                      <Calendar
                        onChange={onChange}
                        value={value}
                      />
                 </div>


        </div>
    );
}