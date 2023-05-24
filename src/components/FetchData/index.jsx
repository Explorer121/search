import axios from 'axios'
import React, { useState, useEffect  } from 'react'

const FetchData  = () => {
     const [ term, setTerm ] = useState('')
     const [ results, setResults ] = useState([])

     console.log(results)

     useEffect(() => {
          const search = async () => {
               const  { data }  = await axios.get('https://jsonplaceholder.typicode.com/todos/', {
                    params: {
                         action: 'query',
                         list: 'search',
                         orign: '*',
                         format: 'json',
                         srsearch: term,
                    },
               });
               console.log(term)
               console.log(data)
               setResults(data)
          }
          setTimeout(() => {
               // if(term) {
                    search();
               // }
          }, 500);
          
          
     }, [term])

     const makeSubmit= (e) => {
          e.preventDefault();
     }

     const renderResults = results.map((result) => {
          return (
               <div key={result.userId}>
                    <p>{result.id}- {result.title}</p>
               </div>
          )
     })

     return (
          <div>
          <form onSubmit={makeSubmit}>
               <input 
                style={{ 
                    width: '70%', margin: 'auto', 
                    padding: '10px',
                    // margin: '20px 3px'
                    }}
               placeholder="Enter Movie" 
               onChange={(e) => setTerm(e.target.value)}
               value={term}
               />
               <button>Submit</button>
          </form>
          <div>
               <p>{renderResults}</p>
          </div>
     </div>
     )
}
export default FetchData