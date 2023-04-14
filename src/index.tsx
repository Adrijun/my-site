import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Structure } from './components/Structure/Structure';
import Main from './components/Main/Main';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import CV from './components/CV/CV';
import NotFound from './components/NotFound/NotFound';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Structure />}>
          <Route index element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
