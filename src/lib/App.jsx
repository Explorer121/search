import React, { useState } from 'react'
import CreateArea from '../components/CreateArea'
import Footer from '../components/Footer';
import Header from '../components/Header'
import Note from '../components/Note';
// import { collection, getDocs } from 'firebase/firestore'
// import { db } from './lib/firebase'




const App = () => {
  const [notes, setNotes] = useState([]);

  // when the app loads, then listen to database and fetch the data
  // const notesCollectionRef = collection(db, "Notes");

  // React.useEffect(() => {
  //   const getNotes = async () => {
  //     const data = await getDocs(notesCollectionRef);
  //     console.log(data);
  //     setNotes(data.docs.mao(doc => ({
  //       ...doc.data(),
  //       id: doc.id
  //     })));
  //   }

  //   getNotes();
  // }, []);

  const addNote = async (newNote) => {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }




  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter(index => {
        return index!==id;
      });
    });
  }

  return (
    <div className='App'>
      <Header />
      <CreateArea onAdd={addNote} />

      {notes.map((noteItem, index) => (
        <Note 
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}

      <Footer />
    </div>
  )
}

export default App
