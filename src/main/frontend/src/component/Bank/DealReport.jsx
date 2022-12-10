import React from 'react';
import '../css/DealReport.css'



export default function DealReport (){
    return(
        <div className="dealReport">
            <div className="dealReportComtent">고객님의 거래내역</div>
            <table className="dealReportTable">
                <tr className="dealReportTrComponent">
                    <th className="orderComponent">순서</th>
                    <th className="categoryComponent">거래유형</th>
                    <th className="contentComponent">거래내용</th>
                    <th className="moneyComponent">거래금액</th>
                </tr>
                <tr className="dealReportTrComponent">
                    <th className="orderComponentList">순서</th>
                    <th className="categoryComponentList">거래유형</th>
                    <th className="contentComponentList">거래내용</th>
                    <th className="moneyComponentList">거래금액</th>
                </tr>
            </table>
         </div>
    );
}