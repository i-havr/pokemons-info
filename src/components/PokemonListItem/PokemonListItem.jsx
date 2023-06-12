import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useGetPokemonByNameQuery } from 'redux/pokemons/pokemons-slice';
import {
  PokemonListItemStyled,
  PokemonCardStyled,
  PokemonInfoStyled,
  DescriptionWrapper,
} from './PokemonListItem.styled';
import { setLoading } from 'redux/loading/loading-slice';

export const PokemonListItem = ({ name }) => {
  const dispatch = useDispatch();
  const { data: imageUrl, isFetching } = useGetPokemonByNameQuery(name);

  useEffect(() => {
    dispatch(setLoading(isFetching));
  }, [dispatch, isFetching]);

  if (imageUrl) {
    return (
      <PokemonListItemStyled>
        <PokemonCardStyled>
          <img src={imageUrl} alt={name} />
          <PokemonInfoStyled>
            <h5>{name.toUpperCase()}</h5>
            <DescriptionWrapper>
              <p>This is description</p>
            </DescriptionWrapper>
          </PokemonInfoStyled>
        </PokemonCardStyled>
      </PokemonListItemStyled>
    );
  }
};

// <figure class="card card-hover-upTitleBg border-0 rounded-0">
//   {/* <img class="card-img" src="https://i.ibb.co/30H3wzG/01.jpg" /> */}
//   <figcaption class="card-body text-dark">
//     <h5 class="card-title text-dark">TITLE</h5>
//     <p class="card-text small">DESCRIPTION</p>
//   </figcaption>
// </figure>;
