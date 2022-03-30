import React from 'react'
import { StyledHelp } from '../styles/Help.style'

const Help = () => {
  return (
    <StyledHelp>
    <div align="center">
      <svg xmlns="http://www.w3.org/2000/svg" width="104" height="64" viewBox="0 0 208 128"><rect width="198" height="118" x="5" y="5" ry="10" stroke="#000" stroke-width="10" fill="none"/><path d="M30 98V30h20l20 25 20-25h20v68H90V59L70 84 50 59v39zm125 0l-30-33h20V30h20v35h20z"/></svg>
    </div>

    <hr/>
    <p align='center'>
      Markdown Reference: &nbsp;  
      <a href='https://www.markdownguide.org/basic-syntax/' >Marcdownguide.org</a>   
    </p>
    <hr/>
    <br/>
    <h2>Headings:</h2>
      <p>
        # H1, ## H2, ### H3
      </p>
    <h2>Bold text:</h2>
        <p>**some text**</p>
     <h2>Blockquote:</h2>
        <p>&gt;your quote</p>
     <h2>Unordered list:</h2>
        <p>-item</p>
        <p>-item</p> 
        <p>-item</p>
     <h2>Ordered list:</h2>
        <p>1. item one</p>
        <p>2. item one</p>
        <p>3. item one</p>
     <h2>Code:</h2>
        <p>`some code`</p>    
     <h2>Link:</h2>
        <p>[title](https://www.example.com)</p>
     <h2>Image:</h2>
        <p>![alt text](image.jpg)</p>
    </StyledHelp>
  )
}

export default Help