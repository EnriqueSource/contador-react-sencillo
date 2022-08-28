import {useState} from "react";

function App() {
  return (
    <>
      <Counter />
      <footer>
        <p>blogdeenrique.com</p>
      </footer>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <CountNumber count={count} />
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </main>
  );
}

function CountNumber({count}) {
  return (
    <p>
      <span className="prefix">Count:</span>
      {count}
    </p>
  );
}

export default App;
