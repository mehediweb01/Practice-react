import { useState } from 'react'

function From() {
  const [fromData, setFromData] = useState({
    name: '',
    email: '',
  })
  const [submitData, setSubmitData] = useState({
    name: '',
    email: '',
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFromData(preData => ({
      ...preData,
      [name]: value,
    }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    setSubmitData(fromData)
  }

  return (
    <div className=" pt-5 w-full h-screen bg-slate-100">
      <form
        onSubmit={handleSubmit}
        className="shadow-md shadow-black md:w-1/3 w-[90%] mx-auto p-8 rounded-lg border border-slate-500"
      >
        <h1 className="text-center text-2xl text-indigo-700 font-bold ">
          Login from
        </h1>
        <div>
          <label className="block text-indigo-600 text-sm font-semibold">
            Name:
          </label>
          <input
            type="text"
            placeholder="Name..."
            name="name"
            value={fromData.name}
            onChange={handleChange}
            className="w-full block border border-slate-300 focus:ring-2 focus:ring-indigo-400 focus:outline-0 focus:border-0 focus:shadow-md ps-2 px-3 py-1 rounded-lg"
          />
        </div>
        <div className="mt-3">
          <label className="block text-indigo-600 text-sm font-semibold">
            Email:
          </label>
          <input
            type="email"
            placeholder="Email..."
            name="email"
            value={fromData.email}
            onChange={handleChange}
            className="w-full block border border-slate-300 focus:ring-2 focus:ring-indigo-400 focus:outline-0 focus:border-0 focus:shadow-md ps-2 px-3 py-1 rounded-lg"
          />
        </div>
        <div className="mt-3">
          <label className="block text-indigo-600 text-sm font-semibold">
            Password:
          </label>
          <input
            type="password"
            placeholder="Password..."
            className="w-full block border border-slate-300 focus:ring-2 focus:ring-indigo-400 focus:outline-0 focus:border-0 focus:shadow-md ps-2 px-3 py-1 rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 w-full mt-3 text-white text-xl px-3 py-2 rounded-md"
        >
          Login
        </button>
        {/* show data */}
        <div className="mt-5">
          <p className="text-sm text-slate-600 shadow-sm p-2 rounded-lg ">
            Name: {submitData.name}
          </p>
          <p className="text-sm text-slate-600 shadow-sm p-2 rounded-lg ">
            Email: {submitData.email}
          </p>
        </div>
      </form>
    </div>
  )
}
export default From
