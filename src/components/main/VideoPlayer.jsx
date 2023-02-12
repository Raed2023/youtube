import React from 'react'

const VideoLink = {
  URL:"https://www.youtube.com/embed/yTKSnVK363E",
VideoName:"If You Could Do Anything",
};







const VideoPlayer = () => {
  return (
    <div>
       <iframe width="942" height="530" title="video" src={VideoLink.URL}></iframe>
       <h3 style={{color:"black", fontSize: "18px"}}> {VideoLink.VideoName}</h3>
    </div>
  )
}

export default VideoPlayer