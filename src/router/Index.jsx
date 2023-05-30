import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import About from "../pages/About";
import Home, { loaderProducts } from "../pages/Home";
import ProductCard, { loaderProduct } from "../components/ProductCard";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter ([
    {
        path: '/',
        element: <Root/>,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                element: <Home/>,
                loader: loaderProducts,
            },
            {
                path: 'about',
                element: <About/>
            },
            {
                path: 'productcard/:id',
                element: <ProductCard/>,
                loader: loaderProduct,
            },
        ]
    },
]);

export default router
