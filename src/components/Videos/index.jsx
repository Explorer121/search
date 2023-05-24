import React from 'react'
import IndexVdeItems from './indexVdeItems'

 
const VideoList = ({ videos, onVideoSelect }) => {
     const renderVideoList = videos.map((video) => {
          return <IndexVdeItems video={video} key={video.id} onVideoSelect={onVideoSelect} />
     })
     return (
          <div>
               {renderVideoList}
          </div>
     )
}

export default VideoList