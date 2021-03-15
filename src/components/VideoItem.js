import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        // We use a callback on the onClick, so that we can send the 'video' as argument for onVideoSelect
        // if i give 'onClick={onVideoSelect(video)}' - then it triggers the call when component is mounted.
        // I want it wait till i click.
        <div onClick={() => onVideoSelect(video)}className='video-item item'>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
            <div className="content">
                <div className="header">
                {video.snippet.title}
                </div>
            </div> 
        </div>
    )
}

export default VideoItem