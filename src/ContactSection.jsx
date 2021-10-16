import React from "react";
const ContactSection = () => {
    return (
        <>
            <div>
                <div id="contact-sec">
                    <div className="overlay">
                        <div className="container set-pad">
                            <div className="row text-center">
                                <div className="col-lg-8 col-lg-offset-2 col-md-8 col-sm-8 col-md-offset-2 col-sm-offset-2">
                                    <h1 data-scroll-reveal="enter from the bottom after 0.1s" className="header-line">CONTACT US</h1>
                                    <p data-scroll-reveal="enter from the bottom after 0.3s">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Aenean commodo.
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Aenean commodo.
                                    </p>
                                </div>
                            </div>
                            {/*/.HEADER LINE END*/}
                            <div className="row set-row-pad" data-scroll-reveal="enter from the bottom after 0.5s">
                                <div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control " required="required" placeholder="Your Name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control " required="required" placeholder="Your Email" />
                                        </div>
                                        <div className="form-group">
                                            <textarea name="message" required="required" className="form-control" style={{ minHeight: '150px' }} placeholder="Message" defaultValue={""} />
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-info btn-block btn-lg">SUBMIT REQUEST</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CONTACT SECTION END*/}
            </div>
        </>
    )
}
export default ContactSection