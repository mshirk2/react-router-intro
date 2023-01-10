import React from "react";
import { Link } from "react-router-dom";

function Slurm(){
    return (
        <div>
            <h1>Slurm</h1>
            <div>
                <img src="https://preview.redd.it/cx7srt0femj81.jpg?auto=webp&s=de5f4161c5590cc679cf2edbaedb088a62353a76" alt="Slurm Drink"/>
            </div>
            <Link exact to="/">Go Back</Link>
        </div>
    )
}

export default Slurm;