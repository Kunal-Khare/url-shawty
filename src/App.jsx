import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        elements: <LandingPage />,
      },

      {
        path: "/auth",
        elements: <Auth />,
      },

      {
        path: "/dashboard",
        elements: <Dashboard />,
      },
      {
        path : "link",
        elements : <Link/>
      } 
    ],
  },
]);

const App = () => {
  return <div>App</div>;
};

export default App;
