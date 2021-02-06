import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Barlow', 'Barlow Condensed', sans-serif;
  }

  :root {
    --bg-button: hsl(0, 100%, 68%);
    --color-text-blue: hsl(230, 29%, 20%);
    --color-text-blue-secondary: hsl(230, 11%, 40%);
    --color-text-white: hsl(207, 33%, 95%);
    --color-text-white-primary: #ffffff;
    --color-text-white-secondary: hsl(231, 7%, 65%);
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);