import { useState , useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        search(defaultSearchTerm)
    
    // we give the 'defaultSearchTerm' to make sure there not too many stale props floating about for react
    }, [defaultSearchTerm])

    const search = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        setVideos(response.data.items)
    }

    // outputs back list of videos and a method to make new list
    return [videos, search]
    // this more common in js community - but either doesnt matter
    // return { videos, search }
}

export default useVideos
