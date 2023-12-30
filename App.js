import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";

// React element
const heading = React.createElement("h1", { id: "heading" }, "Hello");
const jsxHeading = <h1 id="heading">hello in JSX</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
const FunctionalHeading = () => {
  return <h1>heading in functional</h1>;
};
// react functional components
const HeadingFunctional = () => {
  return (
    <div className="heading-container">
      <Header />
      <FunctionalHeading />
      <h1 className="heading">hello in functional component</h1>
    </div>
  );
};

root.render(<HeadingFunctional />);
