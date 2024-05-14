

import React from 'react'
import "../../component/Footer/Footer.css"
import Insta from "@iconscout/react-unicons/icons/uil-instagram"
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin"
import Guthub from "@iconscout/react-unicons/icons/uil-github"
import wave from "../../img/wave.png"

const Footer = () => {
  return (
    <div className="footer">

        <img src={wave} alt="" style={{width:"100%"}} />
        <div className="f-content">
            <span>Pawanrajora143@gmail.com</span>
            <div className="f-icons">
                <a href="https://www.instagram.com/pawanrajora143/"><Insta color="white" size="3rem"/></a>
                <a href="https://www.linkedin.com/in/pawan-rajora-848153191/"><Linkedin color="white" size="3rem"/></a>
                <a href="https://github.com/pawanrajora143"><Guthub color="white" size="3rem"/></a>
            </div>

        </div>
    </div>
  )
}

export default Footer
