import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@/client/components/theme-provider';
import App from '@/client/App';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
