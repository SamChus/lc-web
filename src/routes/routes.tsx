import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import App from "../App";
import Programs from "../pages/Programs";

const navLinks = [
    { path: "/", element: <App /> }, // Home component
    { path: "/programs", element: <Programs /> }, // Programs component
    { path: "/about", element: "About" },
    { path: "/ministries", element: "Ministries" },
    { path: "/sermons", element: "Sermons" },
    { path: "/give", element: "Give Online" },
    { path: "/contact", element: "Contact Us" },
];

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />, // Wrap routes with the Layout component
        errorElement: <div>Error</div>,
        children: navLinks.map((link) => ({
            path: link.path,
            element: link.element, // Use the element from navLinks
        })),
    },
]);

export default routes;