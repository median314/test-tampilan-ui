import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {Box, ChakraProvider} from '@chakra-ui/react'
import reportWebVitals from './reportWebVitals';
import AppNavbar from './Components/AppNavbar';
import AppFooter from './Components/AppFooter';
import AppNavbarResponsive from './Components/AppNavbarResponsive';
import { AuthProvider } from './Hooks';
import { AuthCartProvider, AuthWishlistProvider } from './Hooks/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <AuthCartProvider>
        <AuthWishlistProvider>

          <ChakraProvider>
              <AppNavbar />
                <Box>
                  <App />
                </Box>
              <AppFooter />
          </ChakraProvider>
        </AuthWishlistProvider>

          </AuthCartProvider>
          </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
