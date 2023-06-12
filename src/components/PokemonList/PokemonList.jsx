import { PokemonListStyled } from './PokemonList.styled';
import { PokemonListItem } from 'components/PokemonListItem/PokemonListItem';

export const PokemonList = ({ pokemonsList }) => {
  if (pokemonsList) {
    return (
      <PokemonListStyled>
        {pokemonsList.map(({ name, id }) => (
          <PokemonListItem key={id} name={name} />
        ))}
      </PokemonListStyled>
    );
  }
};
