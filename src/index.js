import React from 'react';
import ReactDOM from 'react-dom/client';
import Crud from './CrudApp/Crud';

import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Crud/>
  </BrowserRouter>
);


