// // we usually have nested html structure.

// const parent = React.createElement(
//   "div",
//   { id: "parent"},
//   React.createElement(
//     "div",
//     { id: "child"},
//     [React.createElement("h1", { }, "I am a h1 tag"),
//     React.createElement("h2", { }, "I am a h2 tag")]
//   )
// );

// // to create siblings you can pass array in 3rd args.

// // const heading = React.createElement(
// //   "h1",
// //   {id: "heading"},
// //   "This is hello world from React!"
// // );

// // gives heading object to us. React element is nothingbut a normal JS object.
// // this has props as well, 3rh thing is children in createElement.

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// // React.creatElement gives us an object normal JS object, we have render function that converts the object to html structure.

// // JSX exists to make our code more readible.
// // react can be written in JSX. to make it more readable.

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// JSX is a syntax which allows you to write HTMl like code in JS files
// JSX is transpiled before it reaches JS
// Parcel and Babel atre responsible for optmisised code transpilation

// TODO: Read more about babel and parcel both.

// const parent = React.createElement(
//   "div",
//   { id: "parent"},
//   React.createElement(
//     "div",
//     { id: "child"},
//     [React.createElement("h1", { }, "I am a h1 tag"),
//     React.createElement("h2", { }, "I am a h2 tag")]
//   )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// EPISODE 4:

// passing no key in map object (not acceptable) <<<< passing index <<<<<<<<<<<<<<<< passing id
// index as key is an anti pattern

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenuCard from "./components/RestaurantMenuCard";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "restaurant/:resId", element: <RestaurantMenuCard />}
    ],
    errorElement: <Error />
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);


/**
 * Clinet side routing - pages are there in clinet side , componets are there, it just loads
 * server side routing - makes network call, bring data, render whole app to display the data
 */