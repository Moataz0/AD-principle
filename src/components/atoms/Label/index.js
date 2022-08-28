import React from 'react'
import "./style.css"
import PropTypes from "prop-types"


const Label = ({text,className}) => {
  return (
    <span className={className}>{text}</span>
  )
}

Label.propTypes = {
    text: PropTypes.string.isRequired
}


export default Label