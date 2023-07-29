import {
    createBrowserRouter,
  } from "react-router-dom";
import BookDetails from "../pages/BookDetails";
import Home from "../pages/Home";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/book/:title",
      element: <BookDetails />,
    },
  ]);
  
  export default router;