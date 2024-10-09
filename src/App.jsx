/* eslint-disable import/no-extraneous-dependencies */
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FirstAnimation from './components/Animations/First'
import BMICalculate from './components/BMI/BMIJS'
import Contact from './components/Contact/contact'
import Home from './components/Home'
import From from './components/Login/From'
import Navbar from './components/Navbar'
import NoPage from './components/Nopage'
import StudentInfo from './components/StudentInfo'
import Weather from './components/Weather/Weather'
import Calculator from './components/calculator/Calculator'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/bmi" element={<BMICalculate />} />
          <Route path="/Portfolio" element={<StudentInfo />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Log-in" element={<From />} />
          <Route path="/animation" element={<FirstAnimation />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
