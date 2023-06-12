import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-image: repeating-linear-gradient(
    -45deg,
    #F2F2F2,
    #F2F2F2 10px,
    #E1E1E1 10px,
    #E1E1E1 20px
  );
    /* background-color: #F2F2F2; */
    /* background-color: #24282f; */
    /* background-color: #E6DFD9; */
  }

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

img {
  display: block;
  max-width: 100%;
  height: auto;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

`;
