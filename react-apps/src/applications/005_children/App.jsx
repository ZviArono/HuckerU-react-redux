function ListItem({ children }) {
  return (
    <div
      style={{
        color: "yellow",
        fontSize: "60px",
        background: "blue",
      }}
    >
      {children}
    </div>
  );
}

function StyledTitle({ children }) {
  return (
    <div
      style={{
        background: "blue",
        color: "white",
        padding: "10px",
        fontSize: "60px",
      }}
    >
      {children}
    </div>
  );
}

function App() {
  return (
    <div>
      <StyledTitle>This is my Title</StyledTitle>
      <ul>
        <ListItem>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
          <li>Four</li>
        </ListItem>
      </ul>
    </div>
  );
}

export default App;
