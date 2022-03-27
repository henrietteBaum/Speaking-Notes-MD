import React, { useContext } from 'react'
import { NoteContext } from './NoteContext'

function Preview() {

  const [noteText, setNoteText] = useContext(NoteContext);
  return (
    <>
    <h2>Preview</h2>
    <textarea cols="30" rows="10"
    value={noteText}
    ></textarea>
    </>
  )
}

export default Preview