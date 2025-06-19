import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)
  const [showText, setShowText] = useState(true)

  const increment = () => {
    setCount(count + 1);
    setShowText(!showText);
  }

  return (
    <>
      {count}
      <button onClick={increment}>Clique aqui</button>
      {showText && <p>Mostra texto</p>}
    </>
  )
}

export default App;
