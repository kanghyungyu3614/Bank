import React from "react";
import GIF from "../img/bank-88.gif"
import MainPhoto from "../img/은행메인비디오.mp4"
import img from "../img/project.JPG"



 function Main(props) {

    return (
        <div style={{height: "20%"}}>

            <div className="Imgbox" style={{backgroundColor: "#193f52"}}>{/*2022-12-26 김원종 CSS 작업중 */}
                <img className="GIF" src={GIF} style={{width: "13%", marginLeft: "45%"}}/>{/*2022-12-26 김원종 CSS 작업중 */}
              {/*  <h1 className="Title"
                    style={{
                        marginLeft: "31.5%",
                        fontSize: "39px",
                        color: "cornflowerblue"
                    }}>Thank_You_For_Visiting</h1>*/}{/*2022-12-26 김원종 CSS 작업중 */}

                <div style={{border: "2px double azure", borderRadius: "50%"}}></div>
                <div style={{width:"400px" , height:"300px" , border :"solid 1px white"}}>
                     <img src={img} style={{width :"100%" , height:"100%"}}/>
                </div>
                <div>
                    박스권 2
                </div>
            </div>
           {/* <video muted autoPlay loop
                   style={{width: "1300px", marginTop: "9%",border: "15px ridge #3598db",
                       boxShadow:"-11px 0px 68px steelblue"}}> {*//*2022-12-26 김원종 CSS 작업중 *//*}
                <source src={MainPhoto} type="video/mp4"/>
            </video>*/}
            <div style={{display: "flex", width: "1200px", justifyContent: "space-around"}}>
            </div>
        </div>
    )
}

export default Main;
/*
 <span>
                <a href="https://finance.naver.com/">Local_stocks </a>
            </span>
                <span>
                    <a href="https://www.google.com/finance/?sxsrf=ALiCzsakZQRhMYIFPbdjLFEe2hCJkHDJaw:1672040811989&ei=a1GpY46GPK-T1e8PirO9iA0&ved=0ahUKEwjO55e15Zb8AhWvSfUHHYpZD9EQ4dUDCA8&uact=5&oq=%EA%B5%AC%EA%B8%80+%EC%A3%BC%EC%8B%9D&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIQCAAQgAQQhwIQsQMQgwEQFDIECAAQQzIICAAQgAQQsQMyCwgAEIAEELEDEIMBMgQIABBDMgQIABBDMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoECCMQJzoLCC4QgAQQsQMQgwE6CwguEIAEEMcBENEDOgoIABCxAxCDARBDOgcIIxDqAhAnOgoILhDHARDRAxAnOhAILhCABBCHAhDHARDRAxAUOhEILhCABBCxAxCDARDHARDRAzoKCAAQgAQQhwIQFDoQCC4QsQMQgwEQxwEQ0QMQQzoHCAAQsQMQQ0oECEEYAEoECEYYAFAAWJoPYPcPaAVwAXgCgAFwiAHsC5IBBDQuMTGYAQCgAQGwAQrAAQE&sclient=gws-wiz-serp&sa=X">Overseas_stock</a>
            </span>
*/