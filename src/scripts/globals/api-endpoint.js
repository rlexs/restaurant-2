import CONFIG from './config';

const API_ENDPOINT = {
  LIST_RESTAURANTS: `${CONFIG.BASE_URL}list`, // Endpoint to get the list of restaurants
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`, // Endpoint to get the details of a specific restaurant
  SEARCH: (query) => `${CONFIG.BASE_URL}search?q=${query}`, // Endpoint to search for restaurants
};

export default API_ENDPOINT;
