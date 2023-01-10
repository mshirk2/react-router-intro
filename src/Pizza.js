import React from "react";
import { Link } from "react-router-dom";

function Pizza(){
    return (
        <div>
            <h1>P.J.'s Pizza</h1>
            <p>Not just any pizza..</p>
            <div>
                <img src="https://media.tenor.com/5eiPDwWlJqQAAAAC/eating-pizza.gif" alt="pizza"/>
            </div>
            <Link exact to="/">Go Back</Link>
            
        </div>
    )
}

export default Pizza;



