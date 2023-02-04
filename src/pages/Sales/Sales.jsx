import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Box } from 'components/Box/Box';
import { Loader } from 'components/Loader/Loader';

const navItems = [
  { href: 'analytics', text: 'Analytics' },
  { href: 'invoices', text: 'Invoices' },
  { href: 'deposits', text: 'Deposits' },
];

const NavItem = styled(NavLink)`
  padding: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.text};
  text-decoration: none;

  &.active {
    color: ${p => p.theme.colors.primary};
  }
`;

export default function Sales() {
  return (
    <Box as="main" display="flex" flexDirection="column">
      <Box as="header" borderBottom="1px solid black" p={4}>
        <Box as="ul" display="flex">
          {navItems.map(({ href, text }) => (
            <NavItem key={href} to={href}>
              {text}
            </NavItem>
          ))}
        </Box>
      </Box>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
}
