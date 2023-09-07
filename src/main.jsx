import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter, createRoutesFromElements, Route,
  RouterProvider,
} from "react-router-dom";

import Root from "./routes/root";

import './styles/main.scss'
import Error from "./pages/error/Error.jsx";
import About from "./routes/About.jsx";
import Logements from "./routes/Logements.jsx";
import Layout from "./pages/Layout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Root />} />
      <Route path="about" element={<About />} />
      <Route path="logements/:logementsId" element={<Logements />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
