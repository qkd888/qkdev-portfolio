import React from "react";
import { Link, withRouter } from "react-router-dom";



function Header(props) {
    const isActive = (path) => {
        if (props.history.location.pathname === path) {
            return { display: "none" };
        }
    };

    return (


        <div className="header">

            <h3 className="logo">qkdev</h3>
            <ul className="menuList">
                <li style={isActive("/")}>
                    <Link to="/">Home</Link>
                </li>

                <li style={isActive("/projects")}>
                    <Link to="/projects">Projects</Link>
                </li>

                <li style={isActive("/about")}>
                    <Link to="/about">About</Link>
                </li>

                <li style={isActive("/contact")}>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    );
}

export default withRouter(Header);
