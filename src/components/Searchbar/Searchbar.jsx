import debounce from 'lodash.debounce';

import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  SearchbarStyled,
  SearchFormStyled,
  SearchFormInputStyled,
} from './Searchbar.styled';
import { IconButton } from '../Button/IconButton/IconButton';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';

export default function Searchbar() {
  const [, setSearchParams] = useSearchParams();

  const searchPokemon = useMemo(() => {
    return debounce(search => {
      search === '' ? setSearchParams({}) : setSearchParams({ search });
    }, 500);
  }, [setSearchParams]);

  const handleSearch = event => {
    const query = event.target.value.trim().toLowerCase();
    searchPokemon(query);
  };

  return (
    <SearchbarStyled>
      <SearchFormStyled>
        <IconButton aria-label="Search">
          <SearchIcon width="16" />
        </IconButton>

        <SearchFormInputStyled
          type="text"
          autoComplete="off"
          autoFocus
          onChange={handleSearch}
          placeholder="Enter pokemon name"
        />
      </SearchFormStyled>
    </SearchbarStyled>
  );
}
