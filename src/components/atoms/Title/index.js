import React from 'react'
import "./style.css"
import PropTypes from "prop-types"


const Title = ({text}) => {
  return (
    <h1 className='titleStyle'>{text}</h1>
  )
}
Title.prototype = {
    text: PropTypes.string.isRequired
}

export default Title