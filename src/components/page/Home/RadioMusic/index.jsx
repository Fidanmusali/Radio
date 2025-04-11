import React from 'react'
import './style.css'
import main from "/public/img/main.png"
import logo from "/public/img/radiologo.png"

const RadioMusic = () => {
  return (
    <div className='radio-music'>
      <div className="main-img">
        <img src={main} alt="" />
      </div>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
    </div>
  )
}

export default RadioMusic