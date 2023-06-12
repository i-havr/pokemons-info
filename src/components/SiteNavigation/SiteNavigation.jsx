import { SiteNavigationStyled } from './SiteNavigation.styled';
import { NavLinkStyled } from './SiteNavigation.styled';

export const SiteNavigation = () => {
  return (
    <SiteNavigationStyled>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      <NavLinkStyled to="abilities">Abilities</NavLinkStyled>
      <NavLinkStyled to="berries">Berries</NavLinkStyled>
    </SiteNavigationStyled>
  );
};
