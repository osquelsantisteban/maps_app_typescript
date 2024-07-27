import axios from "axios";

const searchApi = axios.create({
    baseURL: 'https://nominatim.openstreetmap.org/search',
    params: {
        format: 'json',
        limit: 5,
    }
});

export default searchApi;
