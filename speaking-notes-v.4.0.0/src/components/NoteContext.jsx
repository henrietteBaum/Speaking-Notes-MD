import { createContext, useState } from "react"

export const NoteContext = createContext(null)

export const NoteProvider = (props) => {
    const [noteText, setNoteText] = useState([]);
    return(
        <NoteContext.Provider value={[noteText, setNoteText]} {...props} />
    )
}
        




