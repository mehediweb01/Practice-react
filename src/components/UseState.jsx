import { useState } from 'react'

function Count() {
  const [count, countValue] = useState(0)
  const update = () => {
    countValue(count + 1)
  }
  return (
    <div
      style={{
        backgroundColor: 'black',
        width: 'max-content',
        padding: '6px',
        margin: '0 auto',
        color: 'white',
        textAlign: 'center',
        fontSize: '22px',
        borderRadius: '8px',
      }}
    >
      <p onClick={update} style={{ cursor: 'pointer' }}>
        {count}
      </p>
      <button onClick={update} style={{ cursor: 'pointer' }}>
        add count
      </button>
    </div>
  )
}
export default Count
