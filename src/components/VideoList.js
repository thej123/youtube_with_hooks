import React from 'react'
import VideoItem from './VideoItem'

// extracting the videos key from props
// const VideoList = (props) => {
const VideoList = ({ videos, onVideoSelect }) => {

    const renderedList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>
    })

    return (
        // <div>{props.videos.length}</div>
        <div className="ui realxed divided list">
            {renderedList}
        </div>
    )
}

export default VideoList