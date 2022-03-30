import React from 'react'
import { Link, Routes } from 'react-router-dom'
import { StyledHelp } from '../styles/Help.style'

const Help = () => {
  return (
    <StyledHelp>
    <h1>Markdown-Reference</h1>
    <a href='https://www.markdownguide.org/basic-syntax/'>Marcdownguide.org</a>   
    </StyledHelp>
  )
}

export default Help