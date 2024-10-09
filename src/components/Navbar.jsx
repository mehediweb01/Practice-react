/* eslint-disable import/no-extraneous-dependencies */
import { motion } from 'framer-motion'
import { NavLink, Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className="flex md:flex-row flex-col justify-around bg-slate-600 p-4 items-center md:rounded-b-full rounded-sm">
        <a href="#logo" className="text-3xl text-green-400">
          LoGo
        </a>
        <nav>
          <ul className="grid md:grid-cols-5 grid-cols-3 justify-between md:gap-10 gap-3 md:mt-0 mt-2">
            <motion.li whileTap={{ scale: 0.5 }} transition={{ duration: 0.5 }}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'border border-green-600 text-white px-4 py-1 rounded-md bg-green-700 transition-all duration-500'
                    : 'border border-red-600 text-white px-4 py-1 rounded-md hover:bg-green-700 transition-all duration-500'
                }
              >
                Home
              </NavLink>
            </motion.li>
            <motion.li whileTap={{ scale: 0.5 }} transition={{ duration: 0.5 }}>
              <NavLink
                to="/bmi"
                className={({ isActive }) =>
                  isActive
                    ? 'border border-green-600 text-white px-4 py-1 rounded-md bg-green-700 transition-all duration-500'
                    : 'border border-red-600 text-white px-4 py-1 rounded-md hover:bg-green-700 transition-all duration-500'
                }
              >
                BMI
              </NavLink>
            </motion.li>
            <motion.li whileTap={{ scale: 0.5 }} transition={{ duration: 0.5 }}>
              <NavLink
                to="/Portfolio"
                className={({ isActive }) =>
                  isActive
                    ? 'border border-green-600 text-white px-4 py-1 rounded-md bg-green-700 transition-all duration-500'
                    : 'border border-red-600 text-white px-4 py-1 rounded-md hover:bg-green-700 transition-all duration-500'
                }
              >
                Portfolio
              </NavLink>
            </motion.li>
            <motion.li whileTap={{ scale: 0.5 }} transition={{ duration: 0.5 }}>
              <NavLink
                to="/Contact"
                className={({ isActive }) =>
                  isActive
                    ? 'border border-green-600 text-white px-4 py-1 rounded-md bg-green-700 transition-all duration-500'
                    : 'border border-red-600 text-white px-4 py-1 rounded-md hover:bg-green-700 transition-all duration-500'
                }
              >
                Contact
              </NavLink>
            </motion.li>
            <motion.li whileTap={{ scale: 0.5 }} transition={{ duration: 0.5 }}>
              <NavLink
                to="/Log-in"
                className={({ isActive }) =>
                  isActive
                    ? 'border border-green-600 text-white px-4 py-1 rounded-md bg-green-700 transition-all duration-500'
                    : 'border border-red-600 text-white px-4 py-1 rounded-md hover:bg-green-700 transition-all duration-500'
                }
              >
                Log in
              </NavLink>
            </motion.li>
          </ul>
        </nav>
      </div>
      {/* this outlet use for navbar properly show in browser because route is a nested code written */}
      <Outlet />
    </>
  )
}
export default Navbar
