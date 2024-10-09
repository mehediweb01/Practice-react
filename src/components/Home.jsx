/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prefer-stateless-function */
// import React from "react";
import { motion } from 'framer-motion'

// class Home extends React.Component{
//     render() {
//         return (
//             <h2>This is a class Component {54-85+65}</h2>
//         )
//     }
// }
// export default Home;

import React from 'react'

class Home extends React.Component {
  render() {
    return (
      <div className="flex justify-around items-center my-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-bold text-5xl first-letter:text-red-600 first-letter:text-9xl  first-letter:font-serif tracking-[3px] text-start leading-relaxed font-mono capitalize">
            Hi, I am <br />
            <span className="text-blue-600">Md. Mehedi Hasan.</span> <br />
            I am a frontend <br /> web developer
          </h1>
          <button
            className="bg-blue-500 text-white py-1 px-6 rounded-md text-xl text-center mt-5  hover:bg-teal-500 hover:text-slate-800 hover:scale-110 transition duration-300 align-middle hover:tracking-[5px] hover:font-semibold"
            type="button"
          >
            contact
          </button>
        </motion.div>
        <motion.div
          className="bg-slate-600 p-4 rounded-lg"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            scale: 1,
            borderRadius: ['0%', '50%', '50%', '0%'],
          }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="mehedi.jpg"
            alt="me"
            className="w-[400px] h-[400px] rounded-md"
          />
        </motion.div>
      </div>
    )
  }
}
export default Home
