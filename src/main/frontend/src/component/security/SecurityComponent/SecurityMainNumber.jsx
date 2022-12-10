import React from 'react';

export default function SecurityMainNumber(props){
console.log("SecurityMainNumber 안의 props 잘들어오니?" + props.props);
let Coma = String(props.props);

let finalComa = "No. "+Coma;
{/*No. 8783 76 9934 {"No. "+Coma}*/}
return (
    <div className="mainSecutiryNumber">{finalComa}</div>
);
}
