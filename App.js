import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Error } from "./src/components/Error";
import { Contact } from "./src/components/Contact";
import Navbar from "./src/components/Navbar";
import Footer from "./src/components/Footer";
import { InternalServerError } from "./src/components/InternalServerError";
import UserContext from "./src/components/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/components/store/appStore";
import CartItems from "./src/components/CartItems";

const AboutUs = lazy(() => import("./src/components/AboutUs"));
const RestaurantMenu = lazy(() => import("./src/components/RestaurantMenu"));

const RootContainer = () => {
  return (
    <>
    <Provider store={appStore}>
      <UserContext.Provider value={{ userName: "Vaibhav" }}>
        <Navbar />
        <Outlet />
      </UserContext.Provider>
      </Provider>
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
        element: <CartItems />,
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
