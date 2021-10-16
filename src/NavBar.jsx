import React from "react";
const NavBar = () => {
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
                        <a className="navbar-brand" href="#"><img className="logo-custom" src="assets/img/superior.png" alt="" /></a>
                    </div>
                    <div className="navbar-collapse collapse move-me">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#home">HOME</a></li>
                            <li><a href="#features-sec">FEATURES</a></li>
                            <li><a href="#faculty-sec">FACULTY</a></li>
                            <li><a href="#course-sec">COURSES</a></li>
                            <li><a href="#contact-sec">CONTACT</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/*NAVBAR SECTION END*/}
        </>
    )
}
export default NavBar;