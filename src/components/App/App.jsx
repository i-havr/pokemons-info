import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { GlobalStyle } from 'styles/GlobalStyle';
import Layout from '../Layout/Layout';

// const Pokemon = lazy(() => import('pages/Pokemon/Pokemon'));
// const PokemonDetails = lazy(() =>
//   import('components/PokemonDetails/PokemonDetails')
// );
const Home = lazy(() => import('pages/Home/Home'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<div>Homepage index route</div>} /> */}

          <Route index element={<Home />} />
          {/* <Route path="page2" element={<div>PokemonsInfo Page 2</div>} />
          <Route path="pokemon" element={<Pokemon />}>
            <Route index element={<div>Common info</div>} />
            <Route path=":pokemonId" element={<PokemonDetails />} />
          </Route>
          <Route path="abilities" element={<div>Abilities</div>} /> */}
        </Route>
      </Routes>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
