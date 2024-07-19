import axios from "axios";

const searchApi = axios.create({
    baseURL: 'https://nominatim.openstreetmap.org/search',
    params: {
        format: 'json',
        limit: 5,
    }
});

export default searchApi;

//'?q=San Sebastián&format=json&limit=5&viewbox=-3.738344,40.503054,-3.638344,40.403054&bounded=1