// import { Outlet } from 'react-router-dom';
import { Box } from 'components/Box/Box';
import Searchbar from 'components/Searchbar/Searchbar';
import { PokemonList } from 'components/PokemonList/PokemonList';
// import { NavItemStyled } from './Home.styled';

// const navItems = [
//   { href: '/pokemons-info', text: 'Home' },
//   { href: 'page2', text: 'Page2' },
//   { href: 'pokemon', text: 'Pokemon' },
//   { href: 'abilities', text: 'Abilities' },
// ];

export default function Home() {
  function ditto() {
    return 'ditto';
  }

  return (
    <Box
      as="main"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      // alignItems="center"
      width="100%"
    >
      {/* <Box as="header" borderBottom="1px solid black" p={4} pl={6}>
        <Box as="ul" display="flex">
          {navItems.map(({ href, text }) => (
            <NavItemStyled key={href} to={href} end>
              {text}
            </NavItemStyled>
          ))}
        </Box>
      </Box> */}
      <Searchbar onSubmit={ditto} />
      <PokemonList />
      {/* <Outlet /> */}
    </Box>
  );
}
