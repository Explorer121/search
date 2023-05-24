import React, { useState } from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


const CreateArea = (props) => {


    const [note, setNote] = useState({
        title: "",
        content: ""
    });


    function handleChange(e) {
        const { name, value } = e.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    const submitNote = (e) =>{
        props.onAdd(note);
        
        setNote({
            title: "",
            content: ""
        });
        e.preventDefault();
    }

  return (
    <div>
      <form className='create_note' method='post' action='/'>
          <input 
            type='text' 
            name='title'
            placeholder='Title'
            onChange={handleChange}
            value={note.title}
          />
          <textarea
            name='content'
            rows={3}
            placeholder='Take a Note...'
            onChange={handleChange}
            value={note.content}
          />
          <Fab onClick={submitNote}>
              <AddIcon />
          </Fab>
      </form>
    </div>
  )
}

export default CreateArea
