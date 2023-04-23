import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '016aafc1fde2508ef526b5b862551515';

//api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}trending/all/day?api_key=${API_KEY}`
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
