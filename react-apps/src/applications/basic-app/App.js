function SayHello(props) {
  console.log(props);
  return <div style={{ color: props.color }}>Hello {props.name}</div>;
}

function App() {
  return (
    <div>
      <div> Hello </div>
      <p>to React</p>
      <SayHello name="yoram" color="red" />
      <SayHello name="Zvika" color="blue" />
    </div>
  );
}

export default App;
