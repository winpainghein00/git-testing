import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/about",
        element: <div>About</div>,
    },
])