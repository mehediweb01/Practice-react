import React, { useState } from 'react'
import ThemeToggler from './Consume'
import ThemeContext from './ContextAPI'

function ThemeProvider() {
  const [theme, setTheme] = useState('light')

  const ToggleTheme = () => {
    setTheme(PreTheme => (PreTheme === 'light' ? 'dark' : 'light'))
  }
  return (
    <ThemeContext.Provider value={{ theme, ToggleTheme }}>
      <ThemeToggler />
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
