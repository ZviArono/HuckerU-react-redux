function List1() {
  const names = [<li>Lial</li>,<li>Ami</li>,<li>Rivka</li>]
  return (
<ul>{names}</ul>  
);

}

function List2() {
  const names = ['Firas', 'Zvi', 'Keren'];

  return (
    <div>
      {names.map((name) => (
      <li key={name}>{name}</li>
      ))}

    </div>
  );
}

function App() {

  return <List2/>  
}

export default App;
