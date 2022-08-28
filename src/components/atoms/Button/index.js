import React from 'react'
import "./style.css"
import PropTypes from "prop-types"


const Button = ({text}) => {
  return (
    <button className='button_style'>{text}</button>
  )
}

Button.prototype = {
    text: PropTypes.string.isRequired
}

export default Button