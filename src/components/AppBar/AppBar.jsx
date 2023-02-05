import {
  BsStack,
  // BsWalletFill,
  // BsBriefcaseFill,
  // BsChatLeftTextFill,
  // BsPersonLinesFill,
} from 'react-icons/bs';
import { Box } from '../Box/Box';
import { NavLinkStyled } from './AppBar.styled';

const navItems = [
  { href: '/', text: 'Home', icon: BsStack },
  // { href: 'dashboard', text: 'Dashboard', icon: BsStack },
  // { href: 'sales', text: 'Sales', icon: BsWalletFill },
  // { href: 'reports', text: 'Reports', icon: BsBriefcaseFill },
  // { href: 'feedback', text: 'Feedback', icon: BsChatLeftTextFill },
  // { href: 'customers', text: 'Customers', icon: BsPersonLinesFill },
];

export const AppBar = () => {
  return (
    <Box
      as="header"
      p={4}
      display="flex"
      justifyContent="center"
      height="auto"
      borderBottom="1px solid black"
    >
      <Box as="nav" display="flex" justifyContent="space-between">
        {navItems.map(({ href, text, icon: Icon }) => (
          <NavLinkStyled to={href} key={href}>
            <Icon sizes="16" />
            {text}
          </NavLinkStyled>
        ))}
      </Box>
    </Box>
  );
};
