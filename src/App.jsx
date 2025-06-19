import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)
  const [showText, setShowText] = useState(true)

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
    setShowText(!showText);
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={handleClick}>Clique aqui</button>
      {showText && <p>Mostra texto</p>}
    </>
  )
}

export default App;
