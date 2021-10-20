import React from "react";
import { Link } from "react-router-dom";
const NavBar2 = () => {
    return (
        <>
            <div className="navbar navbar-inverse navbar-fixed-top " id="menu">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand" href="/"><img className="logo-custom" src="assets/img/superior.png" alt="" /></a>
                    </div>
                    <div className="navbar-collapse collapse move-me">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="/">HOME</a></li>
                            <li><a href="/">FEATURES</a></li>
                            <li><a href="/">FACULTY</a></li>
                            <li><a href="/">COURSES</a></li>
                            <li><a href="/Team">TEAM</a></li>
                            <li><a href="/">CONTACT</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/*NAVBAR SECTION END*/}
        </>
    )
}
export default NavBar2;