/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { useNavigate } from 'react-router-dom'

function NoPage() {
  const navigate = useNavigate()
  return (
    <div>
      <h1 className="text-7xl text-slate-700 font-bold absolute top-[35%] left-[30%] text-center">
        404 <br /> Page Not Found
      </h1>

      <button
        type="button"
        className="bg-sky-500 text-white p-2 rounded-md hover:bg-indigo-500 hover:text-white hover:scale-105 transition-all duration-500 absolute top-[65%] left-[46%]"
        onClick={() => {
          navigate('/')
        }}
      >
        Back Home
      </button>
    </div>
  )
}

export default NoPage
