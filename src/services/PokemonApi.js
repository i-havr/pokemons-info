import axios from 'axios';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2';

const limit = 20;

export const getHomePagePokemons = async () => {
  // const response = await axios.get(`/pokemon?limit=${limit}&offset=1270`);
  const response = await axios.get(`/pokemon?limit=${limit}&offset=0`);
  // console.log(response.data);
  // console.log('Total count', response.data.count);
  // console.log('Total pages', Math.floor(response.data.count / limit));
  return {
    totalCount: response.data.count,
    totalPages: Math.floor(response.data.count / limit),
    results: response.data.results,
  };
};

export const getPokemonByName = async name => {
  const response = await axios.get(`/pokemon/${name}`);
  // console.log(response.data);
  return response.data;
};

// export const getTrendingMovies = async () => {
//   const response = await axios.get(`/3/trending/movie/day?api_key=${API_KEY}`);
//   return response.data.results;
// };

// export const searchMovies = async query => {
//   const response = await axios.get(
//     `/3/search/movie?api_key=${API_KEY}&query=${query}`
//   );
//   return response.data.results;
// };

// export const getMovieById = async movieId => {
//   const response = await axios.get(`/3/movie/${movieId}?api_key=${API_KEY}`);
//   return response.data;
// };

// export const getCreditsById = async movieId => {
//   const response = await axios.get(
//     `/3/movie/${movieId}/credits?api_key=${API_KEY}`
//   );
//   return response.data;
// };

// export const getReviewsById = async movieId => {
//   const response = await axios.get(
//     `/3/movie/${movieId}/reviews?api_key=${API_KEY}`
//   );
//   return response.data.results;
// };
