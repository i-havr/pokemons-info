import { AppBarStyled, AppBarWrapperStyled } from './AppBar.styled';
import Logo from 'components/Logo/Logo';
import Searchbar from 'components/Searchbar/Searchbar';
import { SiteNavigation } from 'components/SiteNavigation/SiteNavigation';

export const AppBar = () => {
  return (
    <AppBarStyled>
      <AppBarWrapperStyled>
        <a href="/pokemons-info">
          <Logo />
        </a>
        <Searchbar />
      </AppBarWrapperStyled>
      <SiteNavigation />
    </AppBarStyled>
  );
};
