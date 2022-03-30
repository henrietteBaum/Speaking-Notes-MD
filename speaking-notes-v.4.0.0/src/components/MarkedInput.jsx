import React, { useContext } from 'react'
import { StyledTextarea } from '../styles/MarkedInput.style';
import { NoteContext } from './NoteContext';

function MarkedInput() {

  const [noteText, setNoteText] = useContext(NoteContext)

  const handleTextChange = (e) => {
    setNoteText(e.target.value);
  }

  return (
    <>
    <StyledTextarea cols="30" rows="10"
    placeholder='type markdown here ...'
    value={noteText}
    onChange={handleTextChange}
    ></StyledTextarea>
    </>
  )
}

export default MarkedInput