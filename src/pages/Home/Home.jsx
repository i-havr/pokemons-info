import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetPokemonsListQuery } from 'redux/pokemons/pokemons-slice';
import { selectIsLoading } from 'redux/loading/loading-selectors';

import { shufflePokemonsList } from 'utils/shufflePokemonsList';

import { HomePageStyled, ContainerStyled } from './Home.styled';
import { Section } from 'components/Section/Section';
import { PokemonList } from 'components/PokemonList/PokemonList';
import { RandomButton } from 'components/Button/RandomButton/RandomButton';
import { LoadMoreButton } from 'components/Button/LoadMoreButton/LoadMoreButton';
import Pokeball from '../../images/pokeball-colour.png';

const LIMIT = 20;

export default function Home() {
  const [allPokemonsList, setAllPokemonsList] = useState(null);
  const [shuffledPokemonsList, setShuffledPokemonsList] = useState(null);
  const [renderedPokemonsList, setRenderedPokemonsList] = useState(null);
  const [isShuffle, setIsShuffle] = useState(false);
  const [showLoadButton, setShowLoadButton] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') ?? 1;
  const searchQuery = searchParams.get('search') ?? '';

  const { data: allPokemons } = useGetPokemonsListQuery();
  const totalPages = allPokemonsList?.length / LIMIT;
  const loading = useSelector(selectIsLoading);

  const showButton =
    showLoadButton && !loading && renderedPokemonsList && page <= totalPages;

  const showLoader = loading && page <= totalPages;

  useEffect(() => {
    if (!allPokemons) {
      return;
    }

    const list = [];
    allPokemons.results.map(({ name, url }) =>
      list.push({ id: url.slice(34, -1), name, url })
    );
    setAllPokemonsList(list);
  }, [allPokemons]);

  useEffect(() => {
    if (!allPokemonsList) {
      return;
    }

    const filter = array => {
      page === 1 && !searchQuery && setRenderedPokemonsList(null);
      const filteredPokemons = array.filter(({ name }) =>
        name.includes(searchQuery)
      );
      // .slice((page - 1) * LIMIT, page * LIMIT);
      return filteredPokemons;
    };

    const renderedPokemons = isShuffle
      ? filter(shuffledPokemonsList)
      : filter(allPokemonsList);

    const checkRepeats = prev => {
      const union = [...new Set([...prev, ...renderedPokemons])];
      const pokemons = union.filter(({ name }) =>
        renderedPokemons.some(pokemon => name === pokemon.name)
      );
      return pokemons;
    };

    if (searchQuery && renderedPokemons.length > LIMIT) {
      console.log('Too many matches, please refine your query');
    } else if (searchQuery && renderedPokemons.length <= LIMIT) {
      setShowLoadButton(false);
      setRenderedPokemonsList(
        [...renderedPokemons].slice((page - 1) * LIMIT, page * LIMIT)
      );
    } else if (!searchQuery) {
      setShowLoadButton(true);
      setRenderedPokemonsList(prev =>
        prev
          ? checkRepeats(prev).slice(0, page * LIMIT)
          : [...renderedPokemons].slice((page - 1) * LIMIT, page * LIMIT)
      );
    }

    // if (findedPokemons.length > LIMIT) {
    //   console.log('Too many matches, please refine your query');
    // } else {
    // }
  }, [allPokemonsList, isShuffle, page, searchQuery, shuffledPokemonsList]);

  const handleRandom = () => {
    setSearchParams({});
    setRenderedPokemonsList(null);
    const shuffledList = shufflePokemonsList([...allPokemonsList]);
    setShuffledPokemonsList(shuffledList);
    setIsShuffle(true);
  };

  const handleLoadMore = () => {
    setSearchParams({ ...searchParams, page: +page + 1 });
  };

  if (renderedPokemonsList) {
    return (
      <HomePageStyled>
        <Section title="">
          <ContainerStyled>
            <RandomButton onClick={handleRandom} aria-label="Pokeball icon">
              <img src={Pokeball} width={20} alt="Pokeball icon" />
              <span>Random pokemons!</span>
            </RandomButton>
          </ContainerStyled>
        </Section>
        <Section title="">
          <ContainerStyled>
            <PokemonList pokemonsList={renderedPokemonsList} />
            {/* <Outlet /> */}
          </ContainerStyled>
        </Section>

        <Section title="">
          <ContainerStyled>
            {showButton && <LoadMoreButton onLoadMoreClick={handleLoadMore} />}
            {showLoader && <span>LOADING...</span>}
          </ContainerStyled>
        </Section>
      </HomePageStyled>
    );
  }
}
