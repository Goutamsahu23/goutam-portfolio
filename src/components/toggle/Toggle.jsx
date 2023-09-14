import React from 'react'
import './Togle.css'
import {BsSun} from 'react-icons/bs'
import {BsMoon} from 'react-icons/bs'
import { themeContext } from '../../Context'
import { useContext } from 'react'
const Toggle = () => {

  const theme=useContext(themeContext)

  const darkmode=theme.state.darkmode;

  const handleClick=()=>{
    theme.dispatch({type:'toggle'})
  }
  return (
    <div className="toggle" onClick={handleClick}>
      <BsMoon/>
      <BsSun/>
      
      <div className="t-button"
        style={darkmode ? {left:'2px'}:{right:'2px'}}
        
      
      ></div>
    </div>
  )
}

export default Toggle
