import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MyThemeProvider } from './data/contexts/theme-context';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage';
import HourCalculatorPage from './pages/HourCalculatorPage';
import About from './pages/home/AboutPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes >
        <Route path='/home' element={<HomePage />} />
        <Route path='/calculator' element={<HourCalculatorPage />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode >
);

reportWebVitals();
