import React from 'react';
import { render } from "react-dom";
import './css/index.css';
import App from './App';
// import {ThemeProvider} from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
// import * as theme from './css/styled-components/Theme';
const root = document.getElementById('root');

render(
  <div>

<BrowserRouter>

    <App />
</BrowserRouter>
  </div>,
  root
);

