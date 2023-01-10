import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css"

function VendingMachine(){
    return (
        <div className="VendingMachine">
            <h1>Vending Machine</h1>
            <div>
                <Link exact to="/lets">Let's Potato Chips</Link>
                <Link exact to="/pizza">P.J.'s Pizza</Link>
                <Link exact to="/slurm">Slurm</Link>
            </div>
            <div>
                <img src="https://media.istockphoto.com/id/1279762708/vector/vending-machine-flat-design.jpg?b=1&s=612x612&w=0&k=20&c=CKqeeABabi2TX7TAYWT9-HRbGzcRmYskDFLysJJWVdo=" alt="Vending Machine"/>
            </div>


        </div>
    )
}

export default VendingMachine;