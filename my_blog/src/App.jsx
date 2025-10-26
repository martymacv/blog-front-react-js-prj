import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";


import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/", element: <Home />,
    // element: <Layout />,
    // children: [
    //   { index: true, element: <Home /> },
    //   { path: "old-home", element: <Navigate to={"/"} /> },
    //   { path: "about", element: <About /> },
    //   { path: "cart", element: <Cart /> },
    //   { path: "thanks", element: <Thanks /> },
    //   { path: "category/:categoryId", element: <Category /> },
    //   { path: "product/:productId", element: <ProductDetails /> },
    //   { path: "*", element: <NotFound /> },
      // { path: "*", element: <Navigate to="/" /> },
    // ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
