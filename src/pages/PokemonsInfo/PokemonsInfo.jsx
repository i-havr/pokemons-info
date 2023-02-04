import { Outlet } from 'react-router-dom';
import { Box } from 'components/Box/Box';
import { NavItemStyled } from './PokemonsInfo.styled';

const navItems = [
  { href: '/pokemons-info', text: 'Home' },
  { href: 'page2', text: 'Page2' },
  { href: 'pokemon', text: 'Pokemon' },
  { href: 'abilities', text: 'Abilities' },
];

export default function PokemonsInfo() {
  return (
    <Box as="main" display="flex" flexDirection="column" width="100%">
      <Box as="header" borderBottom="1px solid black" p={4} pl={6}>
        <Box as="ul" display="flex">
          {navItems.map(({ href, text }) => (
            <NavItemStyled key={href} to={href} end>
              {text}
            </NavItemStyled>
          ))}
        </Box>
      </Box>
      <Outlet />
    </Box>
  );
}
