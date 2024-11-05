// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import History from './component/history';
import Forecast from './component/forecast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App word="CHECK YOUR WEATHER"  />
  },
  {
    path: '/forecast',
    element: <Forecast />
  }
  // ,
  // {
  //   path: '/history',
  //   element: <History />
  // }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <RouterProvider router={router} />

  </React.StrictMode>
);
