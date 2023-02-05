import styled from 'styled-components';

export const PokemonListItemStyled = styled.li`
  width: calc((100% - 80px) / 5);
  hight: auto;
  margin: ${p => p.theme.space[3]}px;
  overflow: hidden;

  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  & img {
    width: 100%;
    /* height: 260px; */
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover img {
    transform: scale(1.03);
    cursor: zoom-in;
  }

  & h5 {
    margin: 0;
    padding: ${p => p.theme.space[3]}px;
  }
`;
