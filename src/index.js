import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TitleProvider } from './context/TitleContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <TitleProvider>
        <App />
      </TitleProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
