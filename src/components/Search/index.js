import React, { Component } from 'react'

class SearchBar extends Component {
     state = {
          term: '',
     }

     onInputChange = e => {this.setState({
          term: e.target.value
     })}

     onFormSubmit = e => {
          e.preventDefault();
          this.props.onFormSubmit(this.state.term)
     }
     render() {
          return (
               <div>
                    <form onSubmit={this.onFormSubmit}>
                         <input 
                          style={{ 
                              width: '70%', margin: 'auto', padding: '10px',
                              margin: '20px 3px'
                              }}
                         placeholder="Enter Movie" onChange={this.onInputChange}
                         value={this.state.term}
                         />
                         <button>Submit</button>
                    </form>
               </div>
          )
     }
}

export default SearchBar