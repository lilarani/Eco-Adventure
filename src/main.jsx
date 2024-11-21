import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Router from './routers/Router';
import AuthProvider from './provider/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <Router></Router>
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>
);
