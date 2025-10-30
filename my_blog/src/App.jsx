import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import LoginForm from "./pages/Auth/LoginForm";
import RegistrationFrom from "./pages/Auth/RegistrationForm";
import ConfirmEmailForm from "./pages/Auth/ConfirmEmailForm";
import RecoveryForm from "./pages/Auth/RecoveryForm";
import UserProfile from "./pages/UserProfile";
import SearchResult from "./pages/SearchResult";
import Portfolio from "./pages/Portfolio";

import { confirmAction, loginAction, registrationAction } from "./actions/authActions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      // { path: "old-home", element: <Navigate to={"/"} /> },
      { path: "post/:postId", element: <PostDetail /> },
      { path: "login", element: <Navigate to="/auth/login" /> },
      { 
        path: "auth/login",
        element: <LoginForm />,
        action: loginAction
      },
      { path: "registration", element: <Navigate to="/auth/registration" /> },
      { 
        path: "auth/registration",
        element: <RegistrationFrom /> ,
        action: registrationAction
      },
      { 
        path: "auth/confirm-email",
        element: <ConfirmEmailForm />,
        action: confirmAction
      },
      { path: "recovery", element: <Navigate to="/auth/recovery" /> },
      { path: "auth/recovery", element: <RecoveryForm /> },
      { path: "profile/:userId", element: <UserProfile /> },
      { path: "search/", element: <SearchResult /> },
      { path: "profile/:userId/portfolio/", element: <Portfolio /> },
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
