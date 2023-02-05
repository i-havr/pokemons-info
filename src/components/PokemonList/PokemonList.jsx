import React, { useState, useEffect } from 'react';
import { PokemonListStyled } from './PokemonList.styled';
import { PokemonListItem } from 'components/PokemonListItem/PokemonListItem';
import { getHomePagePokemons } from 'services/PokemonApi';

export const PokemonList = () => {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const pokemons = await getHomePagePokemons();
        setPokemons(pokemons.results);
      } catch (error) {
        console.log('Whoops, something went wrong ', error.message);
        return;
      }
    };
    getPokemons();
  }, []);

  return (
    <PokemonListStyled>
      {pokemons?.map(({ name, url }) => (
        <PokemonListItem key={url} name={name} />
      ))}
    </PokemonListStyled>
  );
};
