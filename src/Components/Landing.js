import React from "react";
import Quintin from "../images/Quintin.jpg";


export default function Landing() {
    return (
        <div>
            <img src={Quintin} alt="pic of Quintin" className="img" />
            <h1 className="heading">&lt;  Quintin Kelly Dekker / &gt;{" "}</h1>
            <h3 className="subHeading">
                &lt; Full Stack Web Developer / &gt;{" "}
            </h3>
        </div>
    );
}