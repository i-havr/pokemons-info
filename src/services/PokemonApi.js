import axios from 'axios';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2';

// const limit = 20;

// export const getHomePagePokemons = async (params = {}) => {
//   const { data } = await axios.get('/pokemon', {
//     params: { limit, offset: 60 },
//   });
//   return {
//     totalCount: data.count,
//     totalPages: Math.floor(data.count / limit),
//     results: data.results,
//   };
// };

// export const getPokemonByName = async name => {
//   const { data } = await axios.get(`/pokemon/${name}`);
//   return data;
// };

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
