import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Footer from './components/Footer';
import Header from './components/Header';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer /> 
  </React.StrictMode>,
);
