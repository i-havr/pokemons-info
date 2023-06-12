import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItemStyled = styled(NavLink)`
  margin-right: ${p => p.theme.space[5]}px;
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-decoration: none;

  &.active {
    color: ${p => p.theme.colors.primary};
  }
`;

export const HomePageStyled = styled.main`
  display: block;
`;

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  margin: 0 auto 0 auto;
  padding: 0 32px 0 32px;

  @media screen and (min-width: 480px) {
    padding: 0 64px 0 64px;
  }

  @media screen and (min-width: 768px) {
    padding: 0 128px 0 128px;
  }

  @media screen and (min-width: 1200px) {
    padding: 0 256px 0 256px;
  }
`;
