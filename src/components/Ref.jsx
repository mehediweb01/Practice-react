import { useRef } from 'react'

function Refs() {
  const inputValue = useRef(null)
  const showMe = () => {
    if (inputValue.current.value === '') {
      alert('please enter your text')
    } else {
      alert(inputValue.current.value)
    }
  }
  return (
    <div className="flex justify-center items-center gap-5">
      <input
        type="text"
        ref={inputValue}
        placeholder="Enter your text"
        className="border border-red-400 rounded-md px-4 py-1 "
      />
      <button
        type="button"
        onClick={showMe}
        className="bg-sky-400 text-white shadow-lg shadow-black px-4 py-1 rounded-md"
      >
        click me
      </button>
    </div>
  )
}

export default Refs
