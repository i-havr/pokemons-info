import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
// STYLES
import { GlobalStyle } from 'styles/GlobalStyle';
import Layout from '../Layout/Layout';
// PAGES
const Sales = lazy(() => import('pages/Sales/Sales'));
const PokemonsInfo = lazy(() => import('pages/PokemonsInfo/PokemonsInfo'));
// COMPONENTS
const Invoices = lazy(() => import('components/Invoices/Invoices'));
const InvoiceDetails = lazy(() =>
  import('components/InvoiceDetails/InvoiceDetails')
);

const Pokemon = lazy(() => import('components/Pokemon/Pokemon'));
const PokemonDetails = lazy(() =>
  import('components/PokemonDetails/PokemonDetails')
);
const HomePokemons = lazy(() => import('components/HomePokemons/HomePokemons'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<div>Homepage index route</div>} /> */}

          <Route path="dashboard" element={<div>Dashboard</div>} />

          <Route path="pokemons-info" element={<PokemonsInfo />}>
            <Route index element={<HomePokemons />} />
            <Route path="page2" element={<div>PokemonsInfo Page 2</div>} />
            <Route path="pokemon" element={<Pokemon />}>
              <Route index element={<div>Common info</div>} />
              <Route path=":pokemonId" element={<PokemonDetails />} />
            </Route>
            <Route path="abilities" element={<div>Abilities</div>} />
          </Route>

          <Route path="sales" element={<Sales />}>
            <Route index element={<div>Sales index route</div>} />
            <Route path="analytics" element={<div>Analytics</div>} />
            <Route path="invoices" element={<Invoices />}>
              <Route index element={<div>Invoices index route</div>} />
              <Route path=":invoiceId" element={<InvoiceDetails />} />
            </Route>
            <Route path="deposits" element={<div>Deposits</div>} />
          </Route>

          <Route path="reports" element={<div>Reports</div>} />
          <Route path="feedback" element={<div>Feedback</div>} />
          <Route path="customers" element={<div>Customers</div>} />
        </Route>
      </Routes>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
