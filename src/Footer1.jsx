import React from 'react';
const style = {
    backgroundColor: "white",
    width: "100%",
    display: "flex",
    flexWrap: "Wrap",
    justifyContent: "space-around"

}
const footerSection = {

}

const icons = {
    facebook: {
        background: "#3B5998",
        color: "white",
        padding: "20px",
        fontSize: "30px",
        width: "50px",
        textDdecoration: "none",
        margin: "5px 2px",
        borderRadius: "10%",


    },
    twiter: {
        background: "#55ACEE",
        color: "white",
        padding: "20px",
        fontSize: "30px",
        width: "50px",
        textDdecoration: "none",
        margin: "5px 2px",
        borderRadius: "10%",

    },
    whatsapp: {
        background: "orange",
        color: "white",
        padding: "20px",
        fontSize: "30px",
        width: "50px",
        textDdecoration: "none",
        margin: "5px 2px",
        borderRadius: "10%",

    }

}

const footerLabel = {
    fontWeight: "bold",
    fontSize: "20px",
    margin: "10px"
}

const Footer1 = () => {
    return (
        <>
            <div style={style} >

                <div>
                    <div style={footerLabel}> Follow US </div>
                    <div className="media-icons">
                        <a href="https://web.facebook.com/superior.kasur.3"><i className="fab fa-facebook-f" /></a>
                        <a href="#"><i className="fab fa-twitter" /></a>
                        <a href="#"><i className="fab fa-instagram" /></a>
                        <a href="#"><i className="fab fa-youtube" /></a>
                    </div>
                </div>
                <div>
                    <div style={footerLabel}> Our Location </div>
                    <div>

                        <h4>Bips School, Near, Basti Khadimabad, Kasur</h4>
                        <h4>Punjab, Pakistan.</h4>
                        <h4><strong>Call:</strong> +92 313 4934773 </h4>
                        <h4><strong>Email: </strong>info@suprioracademy.com</h4>

                    </div>
                </div>
                <div>
                    <div style={footerLabel}> Find US </div>
                    <div>
                        <iframe src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Superior Academy, Bips School, Azhar Colony Basti Khadimabad, Kasur&t=&z=14&ie=UTF8&iwloc=B&output=embed" width="100%" height={150} frameBorder={0} style={{ border: 0 }} allowFullScreen />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer1
