/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { memo, useState } from 'react'

function Memo() {
  const [counts, setCounts] = useState(0)

  const counter = () => {
    setCounts(counts + 1)
  }
  // rendering remove used to memo
  const Child = memo(({ added }) => {
    console.log('rendering  now')
    return <p>Count: {added}</p>
  })

  return (
    <div>
      <Child added={counts} />
      <button
        type="button"
        className="bg-red-500 text-white py-1 px-4 rounded-md"
        onClick={counter}
      >
        Counter {counts}
      </button>
    </div>
  )
}

export default Memo
