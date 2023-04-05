import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/main.css';
import ContextProvider from './context/weatherContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextProvider>
        <App />
    </ContextProvider>
)
