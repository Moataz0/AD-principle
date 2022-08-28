import React from 'react'
import "./style.css"
import PropTypes from "prop-types"


const Label = ({text}) => {
  return (
    <span>{text}</span>
  )
}

Label.prototype = {
    text: PropTypes.string.isRequired
}


export default Label