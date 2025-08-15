import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from './routes';
import { GameProvider } from './context/GameContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GameProvider>
      <AppRoutes />
    </GameProvider>
  </React.StrictMode>
);