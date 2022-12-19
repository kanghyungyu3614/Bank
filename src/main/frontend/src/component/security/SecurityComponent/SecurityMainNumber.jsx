import React,{useState,useEffect} from'react';

export default function SecurityMainNumber( props ){
    let result;
    const [ ResultComa , setResultComa] = useState('');

    useEffect(()=>{
    if(props.props.length>0){
                let finalComa =props.props;
                result ="No. "+finalComa.substring(0,4)+" "+finalComa.substring(4,6)+" "+finalComa.substring(6);
                setResultComa(result)
            }
        },[props.props])

    {/*No. 8783 76 9934 {"No. "+Coma} */}
    return(
        <div className="mainSecutiryNumber">{ResultComa}</div>
    );
}