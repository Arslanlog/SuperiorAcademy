import React from "react";
const FeatureSection = () => {
    return (
        <>
            <div>
                <div className="tag-line">
                    <div className="container">
                        <div className="row  text-center">
                            <div className="col-lg-12  col-md-12 col-sm-12">
                                <h2 data-scroll-reveal="enter from the bottom after 0.1s"><i className="fa fa-circle-o-notch" /> WELCOME TO THE SUPERIOR ACADEMY <i className="fa fa-circle-o-notch" /> </h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/*HOME SECTION TAG LINE END*/}
                <div id="features-sec" className="container set-pad">
                    <div className="row text-center">
                        <div className="col-lg-8 col-lg-offset-2 col-md-8 col-sm-8 col-md-offset-2 col-sm-offset-2">
                            <h1 data-scroll-reveal="enter from the bottom after 0.2s" className="header-line">FEATURE LIST </h1>
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
                            <div className="about-div">
                                <i className="fa fa-paper-plane-o fa-4x icon-round-border" />
                                <h3>Quality Education</h3>
                                <hr />
                                <hr />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                    Aenean commodo .
                                </p>
                                <a href="#" className="btn btn-info btn-set">ASK THE EXPERT</a>
                            </div>
                        </div>
                        <div className="col-lg-4  col-md-4 col-sm-4" data-scroll-reveal="enter from the bottom after 0.5s">
                            <div className="about-div">
                                <i className="fa fa-bolt fa-4x icon-round-border" />
                                <h3>SYSTEMATIC APPROACH</h3>
                                <hr />
                                <hr />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                    Aenean commodo .
                                </p>
                                <a href="#" className="btn btn-info btn-set">ASK THE EXPERT</a>
                            </div>
                        </div>
                        <div className="col-lg-4  col-md-4 col-sm-4" data-scroll-reveal="enter from the bottom after 0.6s">
                            <div className="about-div">
                                <i className="fa fa-magic fa-4x icon-round-border" />
                                <h3>ONE TO ONE STUDY</h3>
                                <hr />
                                <hr />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                    Aenean commodo .
                                </p>
                                <a href="#" className="btn btn-info btn-set">ASK THE EXPERT</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FeatureSection;