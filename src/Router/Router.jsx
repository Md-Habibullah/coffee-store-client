import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddCoffee from "../Pages/AddCoffee";
import UpdateCoffee from "../Pages/UpdateCoffee";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Users from "../Pages/Users";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://coffee-store-server-pi-ten.vercel.app/coffee'),
                element: <Home></Home>
            },
            {
                path: '/addCoffee',
                element: <AddCoffee></AddCoffee>
            },
            {
                path: '/updateCoffee/:id',
                loader: ({ params }) => fetch(`https://coffee-store-server-pi-ten.vercel.app/coffee/${params.id}`),
                element: <UpdateCoffee></UpdateCoffee>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/users',
                loader: () => fetch('https://coffee-store-server-pi-ten.vercel.app/user'),
                element: <Users></Users>
            }
        ]
    }
])

export default router