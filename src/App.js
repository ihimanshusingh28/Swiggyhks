


import React from "react";
import "../index.css";
import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Shimmer from "./Components/Shimmer";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Error from "./Components/Error";

// ✅ Corrected typo in file name
import RestaurantMenu from "./Components/RestaurantMenu";

import { Provider } from "react-redux";
import appStore from "./utils.js/appStore";
import Cart from "./Components/Cart";
import { CartProvider } from "./context/CartContext";

// ✅ Lazy load Grocery component for code splitting
const Grocery = lazy(() => import("./Components/Grocery"));

// ✅ App layout
const FinalApp = () => (
  <Provider store={appStore}>
    <CartProvider>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </CartProvider>
  </Provider>
);

// ✅ Routing structure
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <FinalApp />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "about", element: <About /> },
      { path: "cart", element: <Cart /> },
      { path: "contact", element: <ContactUs /> },
      {
        path: "grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

// ✅ Mount the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
