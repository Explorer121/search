import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SearchBar from './components/Search'
import VideoList from './components/Videos';
import IndexVideDetail from './components/Videos/IndexVideDetail';
import youtube from './components/Youtube'
import FetchData from './components/FetchData'

class App extends React.Component {
     state = {
          videos: [],
          selectedVideo: null
     }
     onTermSubmit = async (term) => {
         const res = await youtube.get('/search', {
               params: {
                    q: term.value,
               }
          });
          console.log(res.data.items)
          this.setState({
               videos: res.data.items
          })
     };

     onVideoSelect = (video) => {
          console.log('From the App!!', video)
          this.setState({
               selectedVideo: video
          });
     }

     render() {
          return(
               <div style={{ textAlign: 'center'}}>
                    <Row>
                         <Col>
                         <SearchBar  onFormSubmit={this.onTermSubmit} />
                         <div>
                              <IndexVideDetail video={this.state.selectedVideo}/>
                              <VideoList  
                              onVideoSelect={this.onVideoSelect}
                              videos={this.state.videos}
                              />
                         </div>
                         </Col>
                         <Col>
                              <FetchData  />
                         </Col>
                    </Row>

               </div>
          )
     }
}

export default App