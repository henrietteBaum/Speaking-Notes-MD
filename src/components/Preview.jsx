import React, { useContext } from 'react'
import { NoteContext } from './NoteContext'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

function Preview() {

  const [noteText] = useContext(NoteContext);

  return (
    <>
      <h2>Preview</h2>
      <div>
        <ReactMarkdown>{noteText}</ReactMarkdown>
      </div>
    </>
  )
}

export default Preview