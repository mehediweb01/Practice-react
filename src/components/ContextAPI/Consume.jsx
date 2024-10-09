import React, { useContext } from 'react'
import ThemeContext from './ContextAPI'

function ThemeToggler() {
  const { theme, ToggleTheme } = useContext(ThemeContext)
  return (
    <div
      style={{
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white',
      }}
    >
      <p>current theme is {theme}</p>
      <button type="button" onClick={ToggleTheme}>
        switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
    </div>
  )
}

export default ThemeToggler
