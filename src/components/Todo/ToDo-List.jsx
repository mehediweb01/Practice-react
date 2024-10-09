import { useRef, useState } from 'react'

function ToDoList() {
  const [Todo, setTodo] = useState([])
  const refer = useRef(null)

  // submit
  const onSubmitted = inputText => {
    setTodo([...Todo, inputText])
  }
  // delete
  const deleteItem = index => {
    const newList = [...Todo]
    newList.splice(index, 1)
    setTodo([...newList])
  }

  return (
    <div className="flex justify-center items-center flex-col">
      <form className="p-4 bg-slate-700 rounded-lg">
        <input
          type="text"
          placeholder="Enter your text"
          className="border border-sky-400 focus:outline-0 focus:border-0 focus:bg-orange-200 px-2 py-1 rounded-md focus:shadow-md focus:shadow-black "
          ref={refer}
        />
        <button
          type="submit"
          className="bg-sky-400 text-white px-4 py-1 ml-5 rounded-sm shadow-md shadow-sky-600 transition-all duration-300  hover:bg-orange-500"
          onClick={e => {
            e.preventDefault()
            if (refer.current.value === '') return
            onSubmitted(refer.current.value)
            refer.current.value = ''
          }}
        >
          Add
        </button>
      </form>
      {/* showing now */}
      <div className="bg-slate-700  rounded-md mt-5 text-white">
        {Todo.map((itemList, index) => (
          <li
            key={index}
            className="m-2 bg-slate-600 p-2 rounded-lg list-none flex gap-1 items-center justify-between"
          >
            <span className="text-sky-400 font-bold text-xl">{index}</span>
            <hr className="w-5 text-blue-600 rotate-90" />
            <span>{itemList}</span>

            <button
              type="button"
              className="bg-sky-500 text-white hover:bg-sky-700 hover:text-sky-400 transition-all duration-200 px-2 py-1 rounded-md"
            >
              Edit
            </button>

            <button
              type="button"
              className="bg-red-500 text-white hover:bg-red-700 hover:text-sky-400 transition-all duration-200 px-2 py-1 rounded-md"
              onClick={() => {
                deleteItem(index)
              }}
            >
              delete
            </button>
          </li>
        ))}
      </div>
    </div>
  )
}

export default ToDoList
