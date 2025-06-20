import { useReducer } from "react"

const reducer = (state, action) => {
    switch (action.type) {
        case 'Increment':
            return { ...state, count: state.count + 1 }

        case 'ShowText':
            return { ...state, showText: !state.showText }

        default:
            return state
    }
}

export const ReducerApp = () => {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        showText: true
    })

    function handleClick() {
        dispatch({ type: 'Increment' })
        dispatch({ type: 'ShowText' })
    }

    return (
        <>
            <h3>Quantidade de cliques: {state.count}</h3>
            <button onClick={handleClick}>Clique aqui</button>
            {state.showText && <p>Mostrar texto</p>}
        </>
    )
}