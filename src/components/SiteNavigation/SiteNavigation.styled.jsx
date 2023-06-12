import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SiteNavigationStyled = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${p => p.theme.colors.blue};
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  text-decoration: none;
  text-transform: uppercase;
  color: ${p => p.theme.colors.yellow};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  & > img {
  }

  &:not(:last-child) {
    margin-right: 8px;
  }

  &.active {
    /* background-color: ${p => p.theme.colors.blue}; */
    font-weight: bold;
    color: ${p => p.theme.colors.yellow};
    border: 1px solid ${p => p.theme.colors.yellow};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.accent};
  }
`;
