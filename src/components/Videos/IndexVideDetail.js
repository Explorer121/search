import React from 'react'

const IndexVideDetail = ({ video }) => {
  if(!video){
    return <h1>Loading ...</h1>
  }
  else {
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (//
      <div>
      <iframe width="100%" height="100%" src={videoSrc} title={video.snippet.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <h2>{video.snippet.title}</h2>
      <p>{video.snippet.description}</p>
 </div>
    )
  }
}

export default IndexVideDetail
