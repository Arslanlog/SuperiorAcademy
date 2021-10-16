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
        borderRadius:"10%",
        

      },
      twiter: {
        background: "#55ACEE",
        color: "white",
        padding: "20px",
        fontSize: "30px",
        width: "50px",
        textDdecoration: "none",
        margin: "5px 2px",
        borderRadius:"10%",
        
      },
      whatsapp: {
        background: "#green",
        color: "white",
        padding: "20px",
        fontSize: "30px",
        width: "50px",
        textDdecoration: "none",
        margin: "5px 2px",
        borderRadius:"10%",
        
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
                    <div>
                        <a style={icons.facebook} href="#" class="fa fa-facebook"></a>
                        <a style={icons.twiter} href="#" class="fa fa-twitter"></a>
                        <a style={icons.whatsapp} href="#" class="fa fa-whatsapp"></a>
                    </div>
                </div>
                <div>
                    <div style={footerLabel}> Our Location </div>
                    <div></div>
                </div>
                <div>
                    <div style={footerLabel}> Find US </div>
                    <div></div>
                </div>

            </div>
        </>
    )
}

export default Footer1
