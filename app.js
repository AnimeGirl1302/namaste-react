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

// JSX is a syntax which allows you to write HTMl like code in JS files
// JSX is transpiled before it reaches JS
// Parcel and Babel atre responsible for optmisised code transpilation

// TODO: Read more about babel and parcel both.
