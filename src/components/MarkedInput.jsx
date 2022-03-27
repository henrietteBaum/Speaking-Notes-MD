import React, { useContext } from 'react'
import { NoteContext } from './NoteContext';

function MarkedInput() {

  const [noteText, setNoteText] = useContext(NoteContext)

  const handleTextChange = (e) => {
    setNoteText(e.target.value);
  }

  return (
    <>
    <h2>Markdown</h2>
    <textarea cols="30" rows="10"
    value={noteText}
    onChange={handleTextChange}
    ></textarea>
    </>
  )
}

export default MarkedInput