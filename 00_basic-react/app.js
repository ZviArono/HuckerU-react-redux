function Hello() {
  return React.createElement("div", null, "Hello to react");
}

const rootNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(Hello));
