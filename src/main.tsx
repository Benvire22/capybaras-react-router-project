import React from 'react';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>,
);
