

import React from 'react'
import "./Services.css"
import heartemoji from "../../img/heartemoji.png"
import glasses from "../../img/glasses.png"
import humble from "../../img/humble.png"
import Card from '../Cards/Cards'
import Resume from "./Resume.pdf"
import { themeContext } from '../../Context'
import { useContext } from 'react'
import {motion} from "framer-motion" 

const transition = {duration : 1 , type : "spring"}


const Services = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="services" id='services'>

            {/* left side  */}
            <div className="awesome">
                <span style={{color:darkMode? "white" : ""}}>My Awesome</span>
                <span>Services</span>
                <span style={{color:darkMode? "white" : ""}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />Reprehenderit asperiores id quo beatae aliquid doloremque error nesciunt.</span>
                <a href={Resume} download><button className='button s-button' >Download Cv</button></a>
                <div className="blur s-blur1" style={{background:"#abf1ff"}}></div>
            </div>


            {/* right side */}

            <div className="cards">
                 <motion.div
                 initial={{left:"25%"}}
                 whileInView={{left:"30rem"}}
                 transition={transition}
                 
                 style={{left:"40rem" }}>
                    <Card
                        emoji={heartemoji}
                        heading={"Design"}
                        details={"Figma  , Sketch , Photoshop , Adobe, Adobe Xd"}
                    />
                </motion.div>

        {/* second card */}

        <motion.div
         initial={{left:"15%"}}
         whileInView={{left:"-5rem"}}
         transition={transition}
        
        style={{top:"30rem" , left:"-4rem" }}>

        <Card
        emoji={glasses}
        heading={"Developer"}
        details={"Html, css,  javascript, react"}
        />
        </motion.div>


        {/* third card */}

        <motion.div 
        initial={{left:"25%"}}
        whileInView={{left:"35rem"}}
        transition={transition}
        style={{top:"45rem" , left:"35rem" }}>
            <Card
            emoji={humble}
            heading={"UI/UX"}
            details={"Website Design & Develope"}
            />
        </motion.div>

        <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>

            </div>


        </div>
    )
}

export default Services
