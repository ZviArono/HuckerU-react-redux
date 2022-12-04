import { useState } from "react";

function Input() {
  const [value, setValue] = useState("");
  function valueChange(event) {
    setValue(event.target.value);
    console.log("value changed", event.target.value);
  }
  return (
    <div>
      <input onChange={valueChange} />
      <h2>{value}</h2>
    </div>
  );
}

function App() {
  return (
    <div>
      <Input />
    </div>
  );
}

export default App;
