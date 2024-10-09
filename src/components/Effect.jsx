import { useEffect, useState } from 'react'

function Effect() {
  const [second, setSecond] = useState(0)

  useEffect(() => {
    const counter = setInterval(() => {
      setSecond(prevData => prevData + 1)
    }, 1000)
    return () => clearInterval(counter)
  }, [])

  return <div className="flex justify-center items-center">Count: {second}</div>
}

export default Effect
