import React from 'react'

const IndexVdeItems = ({ video, onVideoSelect }) => {
     return(
          <div onClick={() => onVideoSelect(video)}>
               <img alt="" src={video.snippet.thumbnails.medium.url} />
               <h2>{video.snippet.title}</h2>
               <p>{video.snippet.description}</p>
          </div>
     )
}


export default IndexVdeItems