import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import LoginPage from "./pages/loginPage";
import CartPage from "./pages/CartPage";
import RegisterPage from "./pages/RegisterPage";
import ProductsDetailPage from "./pages/ProductsDetailPage";
const router = createBrowserRouter(
  [
    {
      path: "/", element: <MainLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "home", element: <HomePage /> },
        {
          path: "products",
          children: [
            { index: true, element: <ProductsPage /> },
            { path: ":id", element: <ProductsDetailPage /> },
          ],
        },
        { path: "cart", element: <CartPage /> },
        { path: "login", element: <LoginPage /> },
        { path: "register", element: <RegisterPage /> },
      ]
    },
  ]);


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App