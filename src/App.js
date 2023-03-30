import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ForgotPassword, HomePage, LoginPage } from "./pages";

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
