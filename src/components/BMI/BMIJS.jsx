import { useState } from 'react'
import BMICalculator from './BMICalculator'

function BMICalculate() {
  const [kg, setKg] = useState('')
  const [feet, setFeet] = useState('')
  const [inches, setInches] = useState('')
  const [storeData, setStoreData] = useState(0)

  const convertCalculate = () => {
    const heightFeet = feet * 0.3048
    const heightInches = inches * 0.0254
    const Meter = heightFeet + heightInches
    const BMI = kg / (Meter * Meter)
    setStoreData(BMI.toFixed(1))
  }

  const calculate = () => {
    if (kg === '' || feet === '' || inches === '') {
      alert('please enter your text')
    } else {
      convertCalculate()
    }
  }

  return (
    <div>
      <BMICalculator
        kg={kg}
        setKg={setKg}
        feet={feet}
        setFeet={setFeet}
        inches={inches}
        setInches={setInches}
        calculate={calculate}
        BMI={storeData}
      />
    </div>
  )
}

export default BMICalculate
