import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createHashRouter, createRoutesFromElements } from 'react-router-dom';

import './index.css';

import App from './App';
import Search from './components/Search';
import Category from './components/Category';
import Ingredient from './components/Ingredient';
import Error from './components/Error';

import reportWebVitals from './reportWebVitals';
import Meal from './components/Meal';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<Error />}>
      <Route path='' element={<Search />} />
      <Route path='/category/:name' element={<Category />} />
      <Route path='/ingredient/:name' element={<Ingredient />} />
      <Route path='/meal/:id' element={<Meal />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
