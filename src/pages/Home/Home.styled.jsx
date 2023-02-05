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
