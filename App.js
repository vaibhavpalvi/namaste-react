import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Error } from "./src/components/Error";
import { Contact } from "./src/components/Contact";
import { Cart } from "./src/components/Cart";
import Navbar from "./src/components/Navbar";
import Footer from "./src/components/Footer";
import { InternalServerError } from "./src/components/InternalServerError";

const AboutUs = lazy(() => import("./src/components/AboutUs"));
const RestaurantMenu = lazy(() => import("./src/components/RestaurantMenu"));

const RootContainer = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootContainer />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant-menu/:resId",
        element: (
          <Suspense fallback={<h1>Loading........</h1>}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/internal-server",
    element: <InternalServerError />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
