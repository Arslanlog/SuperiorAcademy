import React from "react";
const HomeSection = () => {
    return (
        <>
            <div className="home-sec" id="home">
                <div className="overlay">
                    <div className="container">
                        <div className="row text-center ">
                            <div className="col-lg-12  col-md-12 col-sm-12">
                                <div className="flexslider set-flexi" id="main-section">
                                    <ul className="slides move-me">
                                        {/* Slider 01 */}
                                        <li>
                                            <h3>Delivering Quality Education</h3>
                                            <h1>THE UNIQUE METHOD</h1>
                                            <a href="#features-sec" className="btn btn-info btn-lg">
                                                GET AWESOME
                                            </a>
                                            <a href="#features-sec" className="btn btn-success btn-lg">
                                               FEATURE LIST 
                                            </a>
                                        </li>
                                        {/* End Slider 01 */}
                                        {/* Slider 02 */}
                                        <li>
                                            <h3>Delivering Quality Education</h3>
                                            <h1>UNMATCHED APPROACH</h1>
                                            <a href="#features-sec" className="btn btn-primary btn-lg">
                                                GET AWESOME
                                            </a>
                                            <a href="#features-sec" className="btn btn-danger btn-lg">
                                                FEATURE LIST
                                            </a>
                                        </li>
                                        {/* End Slider 02 */}
                                        {/* Slider 03 */}
                                        <li>
                                            <h3>Delivering Quality Education</h3>
                                            <h1>AWESOME FACULTY PANEL</h1>
                                            <a href="#features-sec" className="btn btn-default btn-lg">
                                                GET AWESOME
                                            </a>
                                            <a href="#features-sec" className="btn btn-info btn-lg">
                                                FEATURE LIST
                                            </a>
                                        </li>
                                        {/* End Slider 03 */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeSection;