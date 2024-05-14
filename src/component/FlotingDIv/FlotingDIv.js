

import React from 'react'
import "./FlotingDIv.css"

import { themeContext } from '../../Context'
import { useContext } from 'react'

const FlotingDiv = ({image , text1, text2}) => {


  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="flotingdiv" style={{color:darkMode? "white" : ""}}>
        <img src={image} alt="" />
        <span>
            {text1}
            <br />
            {text2}
        </span>
    </div>
  )
}

export default FlotingDiv
