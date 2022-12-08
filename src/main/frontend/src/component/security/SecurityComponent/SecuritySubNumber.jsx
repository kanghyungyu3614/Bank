import React,{useState,useEffect} from 'react';
import '../../css/SecurityCardPassword.css';




export default function SecuritySubNumber(props){


    //alert("SecuritySubNumber 안의 props 잘들어오니?");
    //alert(props);
    console.log("SecuritySubNumber 안의 props");
    console.log("props.props");
    console.log(props.props);
    let Coma = props.props + ""
    console.log("Coma");
    console.log(Coma);
    console.log("Coma length");
    console.log(Coma.length);
    console.log(typeof Coma);
    let SecuritySubNumberArray = [];
     for(let i = 0; i<Coma.length; i++) {
         if(i<36) {
             // StringBuffer 랑 String은 자료형이 다르기 때문에 StringBuffer에 .toString()이 필요합니다.
             // 2자리 + " " + 2자리 를 합친 문자열을 subarr라는 ArrayList에 넣어줍니다.
             SecuritySubNumberArray[i]=Coma.substring(4*i,2+4*i)+" "+Coma.substring(2+4*i,4+4*i);
         }
     }
     console.log("SecuritySubNumberArray");
     console.log(SecuritySubNumberArray);
     let result
     const [ ResultTrComponent , setResultTrComponent] = useState();

     useEffect(()=>{
        result =  SecuritySubNumberArray.map((el,i,arr) =>{
                    console.log("i")
                    console.log(i)
                    console.log("el")
                    console.log(el)
                    if(i<2){
                        return(
                        <tr>
                            <th className="securitysubNumber">{"0"+(5*i+1)}</th>
                            <th className="securityMainNumber">{arr[5*i]}</th>
                            <th className="securitysubNumber">{"0"+(5*i+2)}</th>
                            <th className="securityMainNumber">{arr[5*i+1]}</th>
                            <th className="securitysubNumber">{"0"+(5*i+3)}</th>
                            <th className="securityMainNumber">{arr[5*i+2]}</th>
                            <th className="securitysubNumber">{"0"+(5*i+4)}</th>
                            <th className="securityMainNumber">{arr[5*i+3]}</th>
                            <th className="securitysubNumber">{(5*i+5)}</th>
                            <th className="securityMainNumber">{arr[5*i+4]}</th>
                         </tr>
                        )
                    }else if(i>1 && i<7){
                        return(
                        <tr>
                            <th className="securitysubNumber">{(5*i+1)}</th>
                            <th className="securityMainNumber">{arr[5*i]}</th>
                            <th className="securitysubNumber">{(5*i+2)}</th>
                            <th className="securityMainNumber">{arr[5*i+1]}</th>
                            <th className="securitysubNumber">{(5*i+3)}</th>
                            <th className="securityMainNumber">{arr[5*i+2]}</th>
                            <th className="securitysubNumber">{(5*i+4)}</th>
                            <th className="securityMainNumber">{arr[5*i+3]}</th>
                            <th className="securitysubNumber">{(5*i+5)}</th>
                            <th className="securityMainNumber">{arr[5*i+4]}</th>
                         </tr>
                        )
                    }
                })
               setResultTrComponent(result);
     })

    return (
        <table className="sub">
             {/*(35) ['69 82', '38 50', '43 19', '78 27', '48 16', '06 42', '48 69', '17 30', '83 77', '69 30', '79 36', '12 26', '02 35', '96 67', '94 51', '39 22', '54 75', '98 35', '03 19', '74 06', '72 10', '35 02', '92 28', '62 40', '57 36', '81 26', '97 85', '77 46', '55 07', '87 40', '15 95', '66 35', '96 09', '08 52', '22 75']*/}
            {/*<TrComponent props={SecuritySubNumberArray}/>*/}
            {ResultTrComponent}
        </table>
    );
}