import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "./routes/root";

import './styles/main.scss'
import Error from "./pages/error/Error.jsx";
import About from "./routes/About.jsx";
import Logements from "./routes/Logements.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "logements/:logementsId",
    element: <Logements />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
