import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom';

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation"; 

import "bootstrap/dist/css/bootstrap.min.css";
import "./style/main.scss";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
