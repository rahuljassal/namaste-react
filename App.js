import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header/Header";
import Body from "./components/Body/Body";

//  Strucure
//     1. Header
//         1. Logo
//         2. Nav items (home, about us)
//     2. Body
//         1. Search
//         2. Card container
//             1. Restaurant card
//                 1. name
//                 2. Img
//                 3. rating
//     3. footer
//         1. Copyright
//         2. Info of company

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
