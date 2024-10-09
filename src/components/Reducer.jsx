import { useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'Increment':
      return { count: state.count + 1 }
    case 'Decrement':
      return { count: state.count - 1 }
    default:
      throw new Error('i have got an error')
  }
}
function Reducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  const Increment = () => {
    dispatch({ type: 'Increment' })
  }
  const Decrement = () => {
    dispatch({ type: 'Decrement' })
  }
  return (
    <div className="w-full">
      <h1 className="mx-auto w-1/2">Count: {state.count} </h1>
      <button
        type="button"
        onClick={Increment}
        className="bg-sky-300 m-2 px-4 py-1 text-slate-700"
      >
        Increment
      </button>
      <button
        type="button"
        onClick={Decrement}
        className="bg-sky-300 m-2 px-4 py-1 text-slate-700"
      >
        decrement
      </button>
    </div>
  )
}

export default Reducer
