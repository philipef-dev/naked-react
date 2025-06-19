import { useReducer, } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case 'Increment':
      return { ...state, count: state.count + 1 }
    case 'ShowText':
      return { ...state, showText: !state.showText }
    default:
      return "This action doesns't exist"
  }
}


function App() {
  const [state, dispatach] = useReducer(reducer, {
    count: 0,
    showText: true
  });

  // Poderia fazer assim tambem... usar destruction 
  const { count, showText } = state

  const handleClick = () => {
    dispatach({ type: 'Increment' });
    dispatach({ type: 'ShowText' });
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
