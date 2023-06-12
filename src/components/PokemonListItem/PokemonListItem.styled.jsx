import styled from 'styled-components';

export const PokemonListItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: calc((100% - 32px) / 2);
  margin: ${p => p.theme.space[3]}px;
  background: ${p => p.theme.colors.white};
  border-radius: 5px;
  overflow: hidden;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    cursor: pointer;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12),
      0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
      0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
      0 16px 16px rgba(0, 0, 0, 0.1);
  }

  @media screen and (min-width: 480px) {
    width: calc((100% - 48px) / 3);
  }

  @media screen and (min-width: 1200px) {
    width: calc((100% - 80px) / 5);
  }
`;

export const PokemonCardStyled = styled.figure`
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;

  & > img {
    transition: 0.2s;
  }

  &:hover {
    img {
      transform: translateY(-1%) scale(1.2);
    }

    figcaption {
      transition-delay: 0.1s;
      transform: translateY(-125%);
      /* top: 50%; */
    }
    p {
      transition-delay: 0.1s;
      opacity: 1;
    }
  }
`;

export const PokemonInfoStyled = styled.figcaption`
  position: relative;
  min-height: 40px;
  /* left: 0;
  right: 0;
  top: 90%;
  bottom: 0;
  z-index: 2; */
  transition: all 0.5s;
  /* padding-top: 0; */

  box-shadow: 0 5px 5px ${p => p.theme.colors.white},
    0 0 5px ${p => p.theme.colors.white},
    0 -5px 10px ${p => p.theme.colors.white},
    0 -5px 10px ${p => p.theme.colors.white},
    0 -10px 10px ${p => p.theme.colors.white},
    0 -10px 20px ${p => p.theme.colors.white},
    0 -10px 20px ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.white};

  & > h5 {
    display: block;
    /* height: 40px; */
    vertical-align: bottom;
    margin: 0;
    margin-top: auto;
    padding-top: 8px;
    padding-bottom: 4px;
    padding-left: ${p => p.theme.space[3]}px;
    padding-right: ${p => p.theme.space[3]}px;
  }
`;

export const DescriptionWrapper = styled.div`
  position: absolute;
  padding: 0;
  padding-left: ${p => p.theme.space[3]}px;
  width: 100%;
  height: 250px;
  background-color: ${p => p.theme.colors.white};

  & > p {
    transition: opacity 0.9s;
    opacity: 0;
    margin: 0;
    font-size: 12px;
  }
`;
