import { createBrowserRouter } from "react-router";
import App from "../App";
import MLayout from "../layouts/MLayout";
import Lonin from "../pages/Lonin";
import RegisterPage from "../pages/RegisterPage";
import TodolistPage from "../pages/TodolistPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MLayout />,
    children: [
      {
        index: true,
        element: <Lonin />,
      },
      {
        path:"Register",
        element:<RegisterPage/>,
      },
      {
        path:"Todolist",
        element:<TodolistPage/>,
      }
    ],
  },
]);
export default router;