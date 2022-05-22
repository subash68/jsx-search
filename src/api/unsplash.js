import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID uD0c_OPxmZf1P4fuO2qRDW62q5I5CJgl24PbHqxFRpw'
    }
});