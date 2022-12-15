import React,{useState,useEffect} from 'react';
import '../../css/DealReport.css';

/*2022-12-13 강현규 bank/dealReport list들 출력은 됨 페이징처리 미완성 */
export default function DealListComponent(props){
    const [ ResultTableComponent , setResultTableComponent] = useState([]);
    let result
    useEffect(()=>{
          result = props.props.map((el,i,arr)=>{
                    return(
                     <tr className="dealReportTrComponent">
                         <th className="orderComponentList">{i+1}</th>
                         <th className="categoryComponentList">{el.btypes}</th>
                         <th className="contentComponentList">{el.bcontent}</th>
                         <th className="moneyComponentList">{el.bmoney}</th>
                     </tr>);
                 })
          setResultTableComponent(result)
    },[props.props])


    return(
        <table className="dealReportTable">
            <tr className="dealReportTrComponent">
                <th className="orderComponent">순서</th>
                <th className="categoryComponent">거래유형</th>
                <th className="contentComponent">거래내용</th>
                <th className="moneyComponent">거래금액</th>
            </tr>
            {ResultTableComponent}
        </table>
    );

}

