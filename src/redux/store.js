import { configureStore } from '@reduxjs/toolkit';
import { pokemonsApi } from './pokemons/pokemons-slice';
import loadingReducer from './loading/loading-slice';
import searchReducer from './search/search-slice';

export const store = configureStore({
  reducer: {
    [pokemonsApi.reducerPath]: pokemonsApi.reducer,
    loading: loadingReducer,
    search: searchReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(pokemonsApi.middleware),
});
