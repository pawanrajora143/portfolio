

import React from 'react'
import "../Experience/Experience.css"

import { themeContext } from '../../Context'
import { useContext } from 'react'


const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="Experience" id='Experience'>
        <div className="achivement">
            <div className="cirle">4+</div>
            <span>Year</span>
            <span>Experience</span>
        </div>
        <div className="achivement">
            <div className="cirle">20+</div>
            <span>Completed</span>
            <span>Project</span>
        </div>
        <div className="achivement">
            <div className="cirle">5+</div>
            <span>Companies</span>
            <span>Work</span>
           
        </div>


    </div>
  )
}

export default Experience
