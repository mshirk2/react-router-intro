import React from "react";
import { Link } from "react-router-dom";

function Lets(){
    return (
        <div>
            <h1>Let's Potato Chips</h1>
            <div>
                <img src="https://2.bp.blogspot.com/-YnW9YTrU00M/Wneq0F7-qPI/AAAAAAAAUuA/k62R9qVwsWQriafofkxvynMFKpAJJCV_wCLcBGAs/s1600/lets%2Bpotato%2Bchips.jpg" alt="Let's Potato Chips"/>
            </div>
            <Link exact to="/">Go Back</Link>
        </div>
    )
}

export default Lets;