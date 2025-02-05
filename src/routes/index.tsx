import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "../pages/auth/Login";
import Home from "../pages/home/Home";
import Registration from "../pages/auth/Registration";
import AllProduct from "../pages/all-product/AllProduct";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import NotFound from "../components/NotFound";
import Dashboard from "../pages/dashboard/Dashboard";
import SingleProduct from "../pages/all-product/SingleProduct";
import DashboardHomePage from "../pages/dashboard/DashboardHomePage";
import Users from "../pages/dashboard/admin/Users";
import AdminRoute from "./AdminRoute";
import Cars from "../pages/dashboard/admin/Cars";
import PrivateRoute from "./PrivateRoute";
import Orders from "@/pages/dashboard/admin/Orders";
import CreateCar from "@/pages/dashboard/admin/CareatCar";
import Profile from "@/pages/dashboard/shared/Profile";
import Order from "@/pages/dashboard/user/Order";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Registration />
            },
            {
                path: '/all-product',
                element: <AllProduct />
            },
            {
                path: '/products/:productId',
                element: <SingleProduct />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                index: true,
                element: <PrivateRoute><DashboardHomePage /></PrivateRoute>
            },
            // Admin Routtes
            {
                path: 'users',
                element: <AdminRoute>
                    <Users />
                </AdminRoute>
            },
            {
                path: 'cars',
                element: <AdminRoute><Cars /></AdminRoute>
            },
            {
                path: 'add-car',
                element: <AdminRoute><CreateCar /></AdminRoute>
            },
            {
                path: 'orders',
                element: <AdminRoute><Orders /></AdminRoute>
            },
            // User route
            {
                path: 'profile',
                element: <PrivateRoute><Profile /></PrivateRoute>
            },
            {
                path: 'order',
                element: <PrivateRoute><Order /></PrivateRoute>
            }
        ]
    }
])

export default routes