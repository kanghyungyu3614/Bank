import React from "react";
import GIF from "../img/bank-88.gif"

export default function Main(props) {

    return (
        <div style={{height:"20%"}}>

            <div className="Imgbox" style={{backgroundColor:"#193f52"}}>
                <img className="GIF" src={GIF} style={{width:"13%",marginLeft:"39%"}}/>
                <h1 className="Title"
                    style={{marginLeft:"33.5%",fontSize:"39px",color:"cornflowerblue"}}>Thank_You_For_Visiting</h1>
            </div>


        </div>

    )
}
