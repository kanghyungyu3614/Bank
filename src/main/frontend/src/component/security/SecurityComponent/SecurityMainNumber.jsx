import React from 'react';

export default function SecurityMainNumber(props){
console.log("SecurityMainNumber 안의 props 잘들어오니?" + props.props);
let Coma = String(props.props);

let finalComa =Coma;
{/*No. 8783 76 9934 {"No. "+Coma}*/}
return (
    <div className="mainSecutiryNumber">{"No. "+finalComa.substring(0,4)+" "+finalComa.substring(4,6)+" "+finalComa.substring(6)}</div>
);
}
