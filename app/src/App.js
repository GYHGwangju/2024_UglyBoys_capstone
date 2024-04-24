import React from "react";
import MainLayout from "./layouts/index";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import NotFoundPage from "./pages/NotFoundPage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "page1",
          element: <Page1 />,
        },
      ],
    },
    {
      path: "page2",
      element: <Page2 />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
