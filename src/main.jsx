import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './css/index.css';
import App from './App.jsx';
import { LoaderProvider } from './contexts/LoaderContext.jsx';

import ReactDom from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoaderProvider>
      <App />
    </LoaderProvider>
  </StrictMode>,
);
