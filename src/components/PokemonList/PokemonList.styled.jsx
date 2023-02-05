import styled from 'styled-components';

export const PokemonListStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: -${p => p.theme.space[3]}px;
  margin-top: 0;
  padding: ${p => p.theme.space[4]}px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
