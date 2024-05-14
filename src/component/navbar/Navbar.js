
import React from 'react'
import "./Navbar.css"
import Toggle from '../Toggle/Toggle'
import {Link} from "react-scroll"

import { themeContext } from '../../Context'
import { useContext } from 'react'




const Navbar = () => {

    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


    return (
        <>
            <div className="n-wrapper">
                <div className="n-left">
                    <div className="n-name">Pawan</div>
                   <Toggle/>
                </div>
                <div className="n-right">
                    <div className="n-list">
                        <ul >
                           
                        <Link spy={true} to ="Navbar" smooth={true} activeClass='activeClass'> <li><a style={{color:darkMode? "white" : ""}}  href="#">Home</a></li></Link>
                        <Link spy={true} to ="services" smooth={true}> <li><a style={{color:darkMode? "white" : ""}} href="#">Services</a></li></Link>
                        <Link spy={true} to ="Experience" smooth={true}><li><a style={{color:darkMode? "white" : ""}} href="#">Experience</a></li></Link>
                        <Link spy={true} to ="portfolio" smooth={true} ><li><a style={{color:darkMode? "white" : ""}} href="#">Portfolio</a></li></Link>
                        <Link spy={true} to ="Testimonial" smooth={true} > <li><a style={{color:darkMode? "white" : ""}} href="#">Testimonials</a></li></Link>
                        <Link spy={true} to ="contact" smooth={true} > <li><a style={{color:darkMode? "white" : ""}} href="#">Contact</a></li></Link>
                        </ul>
                    </div>
                    <button className='button n-button'>Contact us</button>
                </div>
            </div>
        </>
    )
}

export default Navbar
