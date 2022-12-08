import React from 'react';

export default function SecuritySubNumber(props){
alert("SecuritySubNumber 안의 props 잘들어오니?");
alert(props);
console.log("SecuritySubNumber 안의 props");
console.log("props.props");
console.log(props.props);
let Coma = props.props + ""
console.log("Coma");
console.log(Coma);
console.log(typeof Coma);
let SecuritySubNumberArray = [];
 for(let i = 0; i<Coma.length; i++) {
     if(i<35) {
         // StringBuffer 랑 String은 자료형이 다르기 때문에 StringBuffer에 .toString()이 필요합니다.
         // 2자리 + " " + 2자리 를 합친 문자열을 subarr라는 ArrayList에 넣어줍니다.
         SecuritySubNumberArray[i]=Coma.substring(4*i,2+4*i)+" "+Coma.substring(2+4*i,4+4*i);
     }
 }
 console.log("SecuritySubNumberArray");
 console.log(SecuritySubNumberArray);
        let html = "";
        for(let i=0; i<7; i++){
            if(i<3){
                html +=  '<tr className=SecuritySubNumberComponent>'+
                '                <th className="securitysubNumber">'+{"0"+(5*i+1)}+'</th>'+
                '                <th className="securityMainNumber">'+{(SecuritySubNumberArray[5*i+1])}+'</th>'+
                '                <th className="securitysubNumber">'+{"0"+(5*i+2)}+'</th>'+
                '                <th className="securityMainNumber">'+{SecuritySubNumberArray[5*i+2]}+'</th>'+
                '                <th className="securitysubNumber">'+{"0"+(5*i+3)}+'</th>'+
                '                <th className="securityMainNumber">'+{SecuritySubNumberArray[5*i+3]}+'</th>'+
                '                <th className="securitysubNumber">'+{"0"+(5*i+4)}+'</th>'+
                '                <th className="securityMainNumber">'+{SecuritySubNumberArray[5*i+4]}+'</th>'+
                '                <th className="securitysubNumber">'+{i<1?("0"+(5*i+5)):(5*i+5)}+'</th>'+
                '                <th className="securityMainNumber">'+{(SecuritySubNumberArray[5*i+5])}+'</th>'+
                '            </tr>';
            }else{
                 html +=  '<tr>'+
                 '                <th className="securitysubNumber">'+{(5*i+1)}+'</th>'+
                 '                <th className="securityMainNumber">'+{(SecuritySubNumberArray[5*i+1])}+'</th>'+
                 '                <th className="securitysubNumber">'+{(5*i+2)}+'</th>'+
                 '                <th className="securityMainNumber">'+{(SecuritySubNumberArray[5*i+2])}+'</th>'+
                 '                <th className="securitysubNumber">'+{(5*i+3)}+'</th>'+
                 '                <th className="securityMainNumber">'+{(SecuritySubNumberArray[5*i+3])}+'</th>'+
                 '                <th className="securitysubNumber">'+{(5*i+4)}+'</th>'+
                 '                <th className="securityMainNumber">'+{(SecuritySubNumberArray[5*i+4])}+'</th>'+
                 '                <th className="securitysubNumber">'+{(5*i+5)}+'</th>'+
                 '                <th className="securityMainNumber">'+{(SecuritySubNumberArray[5*i+5])}+'</th>'+
                 '            </tr>';
            }

        }
                /*<tr>
                    <th className="securitysubNumber">01</th>
                    <th className="securityMainNumber">00 00</th>
                    <th className="securitysubNumber">02</th>
                    <th className="securityMainNumber">00 00</th>
                    <th className="securitysubNumber">03</th>
                    <th className="securityMainNumber">00 00</th>
                    <th className="securitysubNumber">04</th>
                    <th className="securityMainNumber">00 00</th>
                    <th className="securitysubNumber">05</th>
                    <th className="securityMainNumber">00 00</th>
                </tr>*/
return (
    <table className="sub">{html}></table>
);
}