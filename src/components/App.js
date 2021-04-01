import React, { useEffect, useState } from 'react';
import useVideos from '../hooks/useVideos';
// import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

const App = () => {
    // const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null)
    const [videos, search ] = useVideos('Birds')
    
    useEffect(() => {
        setSelectedVideo(videos[0])
    }, [videos])

    // useEffect(() => {
    //     onTermSubmit('birds')
    // }, [])

    // const onTermSubmit = async (term) => {
    //     const response = await youtube.get('/search', {
    //         params: {
    //             q: term
    //         }
    //     });
    //     setVideos(response.data.items)
    //     setSelectedVideo(response.data.items[0])
    // }

    // Custom Hook
    

    return (
        <div className="ui container">
            {/* <SearchBar onFormSubmit={onTermSubmit}/> */}
            <SearchBar onFormSubmit={search}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        {/* We dont have to use the same name 'onVideoSelect', we are simply using it for cleanliness */}
                        <VideoList
                        // onVideoSelect={(video) => setSelectedVideo(video)} 
                        // Further improved
                         onVideoSelect={setSelectedVideo}
                         videos={videos}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


// class App extends React.Component {

//     state = { videos: [], selectedVideo : null }

//     // when the app loads, building will be searched by default
//     componentDidMount() {
//         this.onTermSubmit('buildings')
//     }

//     onTermSubmit = async (term) => {
//         // console.log(term)
//         const response = await youtube.get('/search', {
//             params: {
//                 q: term
//             }
//         });

//         this.setState({ 
//             videos: response.data.items,
//             // Setting up default first video to show
//             selectedVideo: response.data.items[0]
//         })
//     }

//     onVideoSelect = (video) => {
//         this.setState({ selectedVideo: video })
//     }

//     render() {
//         return (
//             <div className="ui container">
//                 <SearchBar onFormSubmit={this.onTermSubmit}/>
//                 <div className="ui grid">
//                     <div className="ui row">
//                         <div className="eleven wide column">
//                             <VideoDetail video={this.state.selectedVideo}/>
//                         </div>
//                         <div className="five wide column">
//                             {/* We dont have to use the same name 'onVideoSelect', we are simply using it for cleanliness */}
//                             <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

export default App