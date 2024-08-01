import React from 'react';
import ReactDOM from 'react-dom/client';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/Other/ScrollToTop.js';
import { FilterContextProvider } from './contexts/FilterContext.jsx';
import { CartContextProvider } from './contexts/CartContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <FilterContextProvider>
          <ScrollToTop/>
          <ToastContainer />
          <App />
        </FilterContextProvider>
        </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
