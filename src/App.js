import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ForgotPassword, Friends, HomePage, LoginPage, Profile } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/friends",
    element: <Friends />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
