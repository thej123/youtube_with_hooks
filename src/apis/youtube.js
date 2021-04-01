import axios from 'axios';

const KEY = 'AIzaSyCG8fWjRN8Vald0MxFL-jcmBpEgbs8EhdU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
})