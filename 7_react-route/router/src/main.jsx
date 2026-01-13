import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// 1 - config router
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Contact from "./routes/Contact.jsx";
// 2 - error page
import ErrorPage from "./routes/ErrorPage.jsx";

import Home from "./routes/Home.jsx";
import Products from "./routes/Products.jsx";
import Info from "./routes/Info.jsx";
import Search from "./components/SearchForm.jsx";

const rouetr = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // 3 - componente base
    children: [
      { path: "/", element: <Home /> },
      { path: "contact", element: <Contact /> },
      { path: "products/:id", element: <Products /> },
      // 8 - nested route
      { path: "products/:id/info", element: <Info /> },
      // 9 - search
      { path: "search", element: <Search /> },
      // 10 - redirect
      { path: "teste", element: <Navigate to="/" /> },
    ],
    // 7 - rota dinamica
  },
  // { path: "contact", element: <Contact /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={rouetr} />
  </StrictMode>
);
