import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import App from "../App";
import Programs from "../pages/Programs";
import NotFound from "../pages/NotFound";
import GivingPage from "../pages/GivingPage";

import TestimoniesPage from "../pages/TestimoniesPage";
import AboutPage from "../pages/AboutPage";
// import Sermons from "../pages/Sarmons";

const navLinks = [
    { path: "/", element: <App /> }, // Home component
    { path: "/programs", element: <Programs /> }, // Programs component
    { path: "/about", element: <AboutPage /> }, // About component
    { path: "/ministries", element: "Ministries" },
    // { path: "/sermons", element: <Sermons /> }, 
    { path: "/give", element: <GivingPage /> }, // Giving component
    { path: "/testimonies", element: <TestimoniesPage /> }, // Testimonies component
    {path: "/livestream", element: "Livestream"},
];

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrap routes with the Layout component
    errorElement: <NotFound />,
    children: [
      ...navLinks.map((link) => ({
        path: link.path,
        element: link.element, // Use the element from navLinks
      })),
      { path: "*", element: <NotFound /> }, // Add NotFound for unmatched routes
    ],
  },
]);

export default routes;