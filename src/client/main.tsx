import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ThemeProvider } from './components/theme-provider';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
