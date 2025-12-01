import axios from 'axios';

// Property Service runs on port 8082
const API_URL = 'http://localhost:8082/api/properties';

const getAuthHeader = () => {
    const token = localStorage.getItem('token');
    if (token) {
        return { Authorization: 'Bearer ' + token };
    } else {
        return {};
    }
};

const getAllProperties = () => {
    return axios.get(API_URL);
};

const getPropertyById = (id) => {
    return axios.get(API_URL + '/' + id);
};

const createProperty = (property) => {
    return axios.post(API_URL, property, { headers: getAuthHeader() });
};

const updateProperty = (id, property) => {
    return axios.put(API_URL + '/' + id, property, { headers: getAuthHeader() });
};

const deleteProperty = (id) => {
    return axios.delete(API_URL + '/' + id, { headers: getAuthHeader() });
};

const PropertyService = {
    getAllProperties,
    getPropertyById,
    createProperty,
    updateProperty,
    deleteProperty,
};

export default PropertyService;
