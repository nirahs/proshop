import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import HomeScreen from './screens/HomeScreen.jsx';
import ProductScreen from './screens/ProductScreen.jsx';
import ErrorScreen from './screens/ErrorScreen.jsx';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorScreen />}>
      {/* Child Routes */}
      <Route index={true} path="/" element={<HomeScreen />} />
      {/* The ":id" is URL segment and value provided in place of that segment is called params */}
      <Route path="/product/:id" element={<ProductScreen />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
