import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Router from './routers/Router';
import AuthProvider from './provider/AuthProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Router></Router>
    </AuthProvider>
  </StrictMode>
);
