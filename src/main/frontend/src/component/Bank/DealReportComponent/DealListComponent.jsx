import React,{useState,useEffect} from 'react';
import '../../css/DealReport.css';

/*2022-12-13 강현규 bank/dealReport list들 출력은 됨 페이징처리 미완성 */
export default function DealListComponent(props){
    console.log("props.props1")
    console.log(props.props)
    console.log("props.props1")
    const [ ResultTableComponent , setResultTableComponent] = useState();
    let result
    useEffect(()=>{
       if(props.props.bhistorylist.length>0){
       console.log("props.props2")
       console.log(props.props)
       console.log("props.props2")
         result = props.props.bhistorylist.map((el,i,arr)=>{
                   return(
                    <tr className="dealReportTrComponent">
                        <th className="categoryComponentList">{el.btypes}</th>
                        <th className="orderComponentList">{el.mname}</th>
                        <th className="moneyComponentList">{el.bmoney}</th>
                        <th className="contentComponentList">{el.mname2}</th>
                    </tr>);
                })
         setResultTableComponent(result)
       }
    },[props.props.bhistorylist])


    return(
        <table className="dealReportTable">
            <tr className="dealReportTrComponent">
                <th className="categoryComponent">거래유형</th>
                <th className="orderComponent">보내신분</th>
                <th className="moneyComponent">거래금액</th>
                <th className="contentComponent">받으신분</th>
            </tr>
            {ResultTableComponent}
        </table>
    );

}

