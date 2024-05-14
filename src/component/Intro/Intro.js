
import React from 'react'
import "./Intro.css"
import Github from "../../img/github.png"
import Linkedin from "../../img/linkedin.png"
import Instagram from "../../img/instagram.png"
import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import boy from "../../img/boy.png"
import thumbup from "../../img/thumbup.png"
import crown from "../../img/crown.png"
import glassesimoji from "../../img/glassesimoji.png"
import FlotingDiv from '../FlotingDIv/FlotingDIv'

import { themeContext } from '../../Context'
import { useContext } from 'react'
import {motion} from "framer-motion"

const transition = {duration : 2 , type : "spring"}



const Intro = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{color:darkMode? "white" : ""}}>Hy! I Am</span>
                    <span>Pawan Rajora</span>
                    <span style={{color:darkMode? "white" : ""}}>Experienced Frontend Developer with over 4 years of dedicated practice in creating dynamic and visually appealing web solutions.</span>
                </div>
                <button className='button i-button'>Hire Me</button>
                <div className="i-icons">
                    <a href="https://github.com/pawanrajora143" target='_blank'><img src={Github} alt="" /></a>
                    <a href="https://www.linkedin.com/in/pawan-rajora-848153191/" target='_blank'><img src={Linkedin} alt="" /></a>
                    <a href="https://www.instagram.com/pawanrajora143/" target='_blank'><img src={Instagram} alt="" /></a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img
                
                initial={{left:"-46%"}}
                whileInView={{left:"-24%"}}
                transition={transition}
                src={glassesimoji} alt=""
                 />

                < motion.div 
                 initial={{top: "-4%", left: "90%"}}
                 whileInView={{left:"68%"}}
                 transition={transition}
                
                style={{ top: "-4%", left: "68%" }}
                className='floting-div'
                >
                    <FlotingDiv image={crown} text1="web" text2="Developer" />
                </motion.div>


                <motion.div
                 initial={{left:"9rem" , top:"45rem"}}
                 whileInView={{left:"0rem"}}
                 transition={transition}
            
                style={{ top: "43rem", left: "8%" }}
                className='floting-div'
                >
                    <FlotingDiv image={thumbup} text1="Best Design" text2="Award" />
                </motion.div>


                <div className="blur"
                    style={{ background: "rgb(238 , 210, 255)" }}>

                </div>

                <div className='blur'
                    style={{
                        background: "#c1f5ff", top: "30rem",
                        width: "50rem", height: "21rem", left: "-15rem"
                    }}></div>
            </div>
        </div>
    )
}

export default Intro
