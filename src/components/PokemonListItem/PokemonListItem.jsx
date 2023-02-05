import React, { useState, useEffect } from 'react';
import { PokemonListItemStyled } from './PokemonListItem.styled';
import { getPokemonByName } from 'services/PokemonApi';

export const PokemonListItem = ({ name }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const pokemon = await getPokemonByName(name);

        setPokemon(pokemon);
      } catch (error) {
        console.log('Whoops, something went wrong ', error.message);
        return;
      }
    };
    getPokemons();
  }, [name]);

  if (pokemon) {
    const { name, sprites } = pokemon;
    const imageUrl = sprites.other['official-artwork'].front_default;

    return (
      <PokemonListItemStyled>
        <div>
          <img src={imageUrl} alt={name} />
        </div>
        <div>
          <h5>{name.toUpperCase()}</h5>
        </div>
      </PokemonListItemStyled>
    );
  }
};
