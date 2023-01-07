import axios from 'axios';

const addressTrackerApi = axios.create({
    baseURL:'https://geo.ipify.org/api/v2',
    params:{
        apiKey:process.env.REACT_APP_API_KEY,

    }
})

export default addressTrackerApi