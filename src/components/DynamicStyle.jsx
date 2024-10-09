import { useState } from 'react'

function DynamicStyle() {
  const [IsActive, setActive] = useState(true)
  const Activity = () => {
    setActive(!IsActive)
  }

  return (
    <button
      type="button"
      className={
        IsActive
          ? 'text-center px-3 py-1 bg-green-700 rounded-lg transition-all duration-300 ml-52'
          : 'text-center px-3 py-1 bg-red-700 rounded-lg transition-all duration-300 mt-52'
      }
      onClick={Activity}
    >
      {IsActive ? 'Active' : 'InActive'}
    </button>
  )
}
export default DynamicStyle
