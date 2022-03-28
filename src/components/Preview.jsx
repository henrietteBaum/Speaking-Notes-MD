import React, { useContext } from 'react'
import { NoteContext } from './NoteContext'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { StyledPreview } from '../styles/Preview.style';

function Preview() {

  const [noteText] = useContext(NoteContext);

  return (
    <>
      <StyledPreview>
        <h2>Preview</h2>
        <br/>
        <ReactMarkdown children={noteText}/>
      </StyledPreview>
    </>
  )
}

export default Preview