import { useCallback, useState } from 'react'

function CallBack() {
  const [count, setCount] = useState(0)

  const Increment = useCallback(() => {
    setCount(preData => preData + 1)
  })
  const decrement = useCallback(() => {
    setCount(preData => preData - 1)
  })
  return (
    <div>
      <h1>count: {count}</h1>
      <button
        type="button"
        onClick={Increment}
        className="bg-slate-700 px-2 py-1 rounded-md text-white m-2"
      >
        increment
      </button>
      <button
        type="button"
        onClick={decrement}
        className="bg-slate-700 px-2 py-1 rounded-md text-white m-2"
      >
        decrement
      </button>
    </div>
  )
}

export default CallBack
