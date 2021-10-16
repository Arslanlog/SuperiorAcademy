import React from "react";
const Faculty = () => {
    return (
        <>
            <div id="faculty-sec">
                <div className="container set-pad">
                    <div className="row text-center">
                        <div className="col-lg-8 col-lg-offset-2 col-md-8 col-sm-8 col-md-offset-2 col-sm-offset-2">
                            <h1 data-scroll-reveal="enter from the bottom after 0.1s" className="header-line">OUR FACULTY </h1>
                            <p data-scroll-reveal="enter from the bottom after 0.3s">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                Aenean commodo.
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                Aenean commodo.
                            </p>
                        </div>
                    </div>
                    {/*/.HEADER LINE END*/}
                    <div className="row">
                        <div className="col-lg-4  col-md-4 col-sm-4" data-scroll-reveal="enter from the bottom after 0.4s">
                            <div className="faculty-div">
                                <img src="assets/img/faculty/1.jpg" height="280" width="200" className="img-rounded" />
                                <h3>FAISAL AMEEN </h3>
                                <hr />
                                <h4>Chemistry <br /> Department</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                    Aenean commodo .
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4  col-md-4 col-sm-4" data-scroll-reveal="enter from the bottom after 0.5s">
                            <div className="faculty-div">
                                <img src="assets/img/faculty/2.JPG" height="280" width="200" className="img-rounded" />
                                <h3>ZEESHAN AMEEN</h3>
                                <hr />
                                <h4>Chemistry <br /> Department</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                    Aenean commodo .
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4  col-md-4 col-sm-4" data-scroll-reveal="enter from the bottom after 0.6s">
                            <div className="faculty-div">
                                <img src="assets/img/faculty/3.JPG" height="280" width="200" className="img-rounded" />
                                <h3>RUBY DECORSA</h3>
                                <hr />
                                <h4>Management <br /> Department</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                    Aenean commodo .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Faculty;