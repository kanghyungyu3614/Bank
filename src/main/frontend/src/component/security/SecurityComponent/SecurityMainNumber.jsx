import React,{useState,useEffect} from 'react';

export default function SecurityMainNumber(props){
    let result;
    let Coma;
    const [ ResultComa , setResultComa] = useState([]);
    useEffect(()=>{
        console.log("SecurityMainNumber 안의 props 잘들어오니?" + props.props);
        Coma = String(props.props);
        console.log("Coma");
        console.log(Coma);
        result = "No. "+finalComa.substring(0,4)+" "+finalComa.substring(4,6)+" "+finalComa.substring(6);
        setResultComa(result)
},[])



let finalComa =Coma;
{/*No. 8783 76 9934 {"No. "+Coma}*/}
return (
    <div className="mainSecutiryNumber">{ResultComa}</div>
);
}
