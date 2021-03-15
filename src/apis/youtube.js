import axios from 'axios';

const KEY = 'AIzaSyDjo2gaWPfqVuKkzp0VoIdF5DunKDRbzpc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
})