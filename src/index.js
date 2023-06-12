import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from 'redux/store';
import { Provider } from 'react-redux';
// import { ApiProvider } from '@reduxjs/toolkit/query/react';
// import { pokemonsApi } from 'redux/pokemons/pokemons-slice';
import { App } from 'components/App/App';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { theme } from 'theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="pokemons-info">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          {/* <ApiProvider api={pokemonsApi}> */}
          <App />
          {/* </ApiProvider> */}
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
