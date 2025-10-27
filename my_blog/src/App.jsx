import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import Auth from "./pages/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      // { path: "old-home", element: <Navigate to={"/"} /> },
      { path: "post/:postId", element: <PostDetail /> },
      { path: "login", element: <Auth /> },
    //   { path: "thanks", element: <Thanks /> },
    //   { path: "category/:categoryId", element: <Category /> },
    //   { path: "product/:productId", element: <ProductDetails /> },
    //   { path: "*", element: <NotFound /> },
      // { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
