import React, { useState } from "react";
import axios from 'axios';
const ContactSection = () => {
    const [user, setUser] = useState({
        Name: "",
        Email: "",
        Message: ""
    })
    function SubmitData(e) {
        const [Name, Email, Message] = user;
        e.preventDefault();
        axios.post("http://localhost:8080", () => {
            name: Name,
                email: Email,
                    message: Message
        })




    }
    function HandleInputs(e) {
        let name = e.target.name, value = e.target.value;
        setUser({ ...user, [name]: value });
    }
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
                                    <form method="POST" >
                                        <div className="form-group">
                                            <input onChange={HandleInputs} name="Name" type="text" className="form-control " required="required" placeholder="Your Name" />
                                        </div>
                                        <div className="form-group">
                                            <input onChange={HandleInputs} name="Email" type="text" className="form-control " required="required" placeholder="Your Email" />
                                        </div>
                                        <div className="form-group">
                                            <textarea onChange={HandleInputs} name="Message" required="required" className="form-control" style={{ minHeight: '150px' }} placeholder="Message" defaultValue={""} />
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" onClick={SubmitData} className="btn btn-info btn-block btn-lg">SUBMIT REQUEST</button>
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