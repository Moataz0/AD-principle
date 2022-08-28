import React from 'react'
import "./style.css"
import PropTypes from "prop-types"


const Title = ({text,className}) => {
  return (
    <h1 className={className}>{text}</h1>
  )
}
Title.propTypes = {
    text: PropTypes.string.isRequired
}

export default Title