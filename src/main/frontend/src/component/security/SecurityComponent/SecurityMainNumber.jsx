import React from 'react';

export default function SecurityMainNumber(props){
alert("SecurityMainNumber 안의 props 잘들어오니?");
alert(props);
console.log("SecurityMainNumber 안의 props 잘들어오니?");
console.log(props.props);
let Coma = props.props + ""
let finalComa = "No. "+Coma.substring(0,4)+" "+Coma.substring(4,6)+" "+Coma.substring(6)
{/*No. 8783 76 9934 {"No. "+Coma}*/}
return (
    <div className="SecurityMainNumberComponent">{finalComa}</div>
);
}
