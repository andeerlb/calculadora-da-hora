import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import HourCalculatorPage from './pages/hour-calculator/HourCalculatorPage';
import About from './pages/about/AboutPage';
import { MyThemeProvider } from './data/contexts/theme-context';
import { TipCalulator } from './pages/tip-calculator/TipCalculatorPage';
import { NotFoundPage } from './pages/404-error/NotFoundPageError';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MyThemeProvider>
        <App />
      </MyThemeProvider>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/calculator' element={<HourCalculatorPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/tip-calculator' element={<TipCalulator />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode >
);

reportWebVitals();
