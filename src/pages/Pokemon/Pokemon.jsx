import { useState, useEffect, Suspense } from 'react';
import { Box } from '../../components/Box/Box';
import { Loader } from 'components/Loader/Loader';
import { getInvoices } from 'services/fakeApi';
import { Outlet } from 'react-router-dom';
import { NavItemStyled } from './Pokemon.styled';

export default function Pokemon() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getInvoices().then(setPokemon);
  }, []);

  return (
    <Box display="flex">
      <Box
        as="aside"
        display="flex"
        flexDirection="column"
        p={3}
        borderRight="1px solid black"
      >
        {pokemon.map(({ id }) => (
          <NavItemStyled key={id} to={`${id}`}>
            {id}
          </NavItemStyled>
        ))}
      </Box>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
}
