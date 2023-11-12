const heading1 = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from react 1"
);
const heading2 = React.createElement(
  "h2",
  { id: "heading-2" },
  "Hello from react 2"
);
// console.log(heading);
const child1 = React.createElement("div", { id: "child-1" }, [
  heading1,
  heading2,
]);
const child2 = React.createElement("div", { id: "child-2" }, [
  heading1,
  heading2,
]);


const parent = React.createElement("div", { id: "parent" }, [child1, child2]);

const rootEl = ReactDOM.createRoot(document.getElementById("root"));
rootEl.render(parent);
