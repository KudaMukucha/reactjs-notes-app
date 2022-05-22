import React, { useState } from "react";

const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('');
    const charecterLimit = 200;
    const handleChange = (event)=>{
        if(charecterLimit - event.target.value.length >= 0){
            setNoteText(event.target.value)
        }
    }
    const handleSaveClick = ()=>{
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('');
        }
    }
    return (
        <div className="note new">
            <textarea name="" id="" cols="10" rows="8" placeholder="Type a note...."value={noteText} onChange={handleChange}></textarea>
            <div className="note-footer">
                <small>{charecterLimit -noteText.length} remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}
export default AddNote