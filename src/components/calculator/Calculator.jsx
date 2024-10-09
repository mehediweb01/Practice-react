/* eslint-disable no-eval */
import { motion } from 'framer-motion'
import React, { useState } from 'react'

function Calculator() {
  const [value, setValue] = useState('')
  const handle = e => {
    setValue(value + e.target.innerHTML)
  }
  const Ac = () => {
    setValue('')
  }
  const del = () => {
    setValue(value.toString().slice(0, -1))
  }
  const equal = () => {
    setValue(eval(value))
  }

  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{
        rotate: [0, 35, 75, 80, 90, 180, 360, 0],
        scale: [0, 0.5, 0.8, 0.9, 1],
      }}
      className="flex flex-col justify-center items-center mt-5 gap-5 w-fit mx-auto bg-gradient-to-tr from-orange-500 to-sky-500 p-4 rounded-md"
    >
      {/* input & show value */}
      <div>
        <input
          type="text"
          placeholder="0"
          className=" shadow-md shadow-orange-600 text-right px-4 py-2 focus:outline-none rounded-md font-semibold font-sans text-xl"
          value={value}
          readOnly
        />
      </div>
      {/* button create */}
      <div className="flex flex-col gap-2">
        {/* row 1 */}
        <div className="flex gap-3 justify-between">
          <motion.button
            type="button"
            className="bg-black text-white shadow-lg  shadow-sky-500 px-3 py-1 rounded-md w-[55px]"
            onClick={Ac}
            whileTap={{ scale: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            AC
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.5 }}
            transition={{ duration: 0.5 }}
            type="button"
            className="bg-black text-white shadow-lg  shadow-sky-500 px-3 py-1 rounded-md w-[55px]"
            onClick={handle}
          >
            %
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.5 }}
            transition={{ duration: 0.5 }}
            type="button"
            className="bg-black text-white shadow-lg  shadow-sky-500 px-3 py-1 rounded-md w-[55px]"
            onClick={del}
          >
            Del
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.5 }}
            transition={{ duration: 0.5 }}
            type="button"
            className="bg-black text-white shadow-lg  shadow-sky-500 px-3 py-1 rounded-md w-[55px]"
            onClick={handle}
          >
            /
          </motion.button>
        </div>
        {/* row 2 */}
        <div className="flex gap-3 justify-between">
          <motion.button
            whileTap={{ scale: 0.5 }}
            transition={{ duration: 0.5 }}
            type="button"
            className="bg-black text-white shadow-lg  shadow-sky-500 px-3 py-1 rounded-md w-[55px]"
            onClick={handle}
          >
            7
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.5 }}
            transition={{ duration: 0.5 }}
            type="button"
            className="bg-black text-white shadow-lg  shadow-sky-500 px-3 py-1 rounded-md w-[55px]"
            onClick={handle}
          >
            8
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.5 }}
            transition={{ duration: 0.5 }}
            type="button"
            className="bg-black text-white shadow-lg  shadow-sky-500 px-3 py-1 rounded-md w-[55px]"
            onClick={handle}
          >
            9
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.5 }}
            transition={{ duration: 0.5 }}
            type="button"
            className="bg-black text-white shadow-lg  shadow-sky-500 px-3 py-1 rounded-md w-[55px]"
            onClick={handle}
          >
            *
          </motion.button>
        </div>
        {/* row 3 */}
        <div className="flex gap-3 justify-between">
          <motion.button
            whileTap={{ scale: 0.5 }}
            transition={{ duration: 0.5 }}
            type="button"
            className="bg-black text-white shadow-lg  shadow-sky-500 px-3 py-1 rounded-md w-[55px]"
            onClick={handle}
          >
            4
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.5 }}
            transition={{ duration: 0.5 }}
            type="button"
            className="bg-black text-white shadow-lg  shadow-sky-500 px-3 py-1 rounded-md w-[55px]"
            onClick={handle}
          >
            5
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.5 }}
            transition={{ duration: 0.5 }}
            type="button"
            className="bg-black text-white shadow-lg  shadow-sky-500 px-3 py-1 rounded-md w-[55px]"
            onClick={handle}
          >
            6
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.5 }}
            transition={{ duration: 0.5 }}
            type="button"
            className="bg-black text-white shadow-lg  shadow-sky-500 px-3 py-1 rounded-md w-[55px]"
            onClick={handle}
          >
            -
          </motion.button>
        </div>
        {/* row 4 */}
        <div className="flex gap-3 justify-between">
          <motion.button
            whileTap={{ scale: 0.5 }}
            transition={{ duration: 0.5 }}
            type="button"
            className="bg-black text-white shadow-lg  shadow-sky-500 px-3 py-1 rounded-md w-[55px]"
            onClick={handle}
          >
            1
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.5 }}
            transition={{ duration: 0.5 }}
            type="button"
            className="bg-black text-white shadow-lg  shadow-sky-500 px-3 py-1 rounded-md w-[55px]"
            onClick={handle}
          >
            2
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.5 }}
            transition={{ duration: 0.5 }}
            type="button"
            className="bg-black text-white shadow-lg  shadow-sky-500 px-3 py-1 rounded-md w-[55px]"
            onClick={handle}
          >
            3
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.5 }}
            transition={{ duration: 0.5 }}
            type="button"
            className="bg-black text-white shadow-lg  shadow-sky-500 px-3 py-1 rounded-md w-[55px]"
            onClick={handle}
          >
            +
          </motion.button>
        </div>
        {/* row 5 */}
        <div className="flex gap-3 justify-between">
          <motion.button
            whileTap={{ scale: 0.5 }}
            transition={{ duration: 0.5 }}
            type="button"
            className="bg-black text-white shadow-lg  shadow-sky-500 px-3 py-1 rounded-md w-[55px]"
            onClick={handle}
          >
            00
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.5 }}
            transition={{ duration: 0.5 }}
            type="button"
            className="bg-black text-white shadow-lg  shadow-sky-500 px-3 py-1 rounded-md w-[55px]"
            onClick={handle}
          >
            0
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.5 }}
            transition={{ duration: 0.5 }}
            type="button"
            className="bg-black text-white shadow-lg  shadow-sky-500 px-3 py-1 rounded-md w-[55px]"
            onClick={handle}
          >
            .
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.5 }}
            transition={{ duration: 0.5 }}
            type="button"
            className="bg-black text-white shadow-lg  shadow-sky-500 px-3 py-1 rounded-md w-[55px]"
            onClick={equal}
          >
            =
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default Calculator
