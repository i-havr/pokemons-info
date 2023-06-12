import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonsApi = createApi({
  reducerPath: 'pokemons',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  tagTypes: ['Pokemon'],
  endpoints: builder => ({
    getPokemonsList: builder.query({
      query: (page = 1, limit = 1500) =>
        `pokemon?limit=${limit}&offset=${page * limit - limit}`,

      providesTags: ['Pokemon'],
    }),

    getPokemonByName: builder.query({
      query: name => `pokemon/${name}`,
      transformResponse: response =>
        response.sprites.other['official-artwork'].front_default,
      // response.sprites.other['official-artwork'].front_shiny,
      providesTags: ['Pokemon'],
    }),
  }),
});

export const { useGetPokemonsListQuery, useGetPokemonByNameQuery } =
  pokemonsApi;
