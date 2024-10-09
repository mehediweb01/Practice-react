/* eslint-disable no-nested-ternary */
function BMICalculator({
  kg,
  setKg,
  inches,
  setInches,
  feet,
  setFeet,
  calculate,
  BMI,
}) {
  return (
    <>
      <div className="w-full my-5">
        <div className="shadow-lg shadow-blue-400 p-4 w-1/3 mx-auto rounded-md ">
          <h1 className="text-center font-semibold font-serif text-3xl border-b-2 border-sky-500 rounded-full text-sky-400">
            BMI Calculator
          </h1>
          <form className="p-2 flex flex-col gap-3">
            <label htmlFor="number" className="font-semibold">
              Age:
              <input
                type="number"
                placeholder="Enter your age"
                className="border border-sky-400 focus:outline-0 focus:rounded-md rounded-md ml-5 py-1 px-2 focus:shadow-md focus:shadow-cyan-500/50"
              />
            </label>
            <div className="flex justify-normal items-baseline gap-5">
              <h1 className="font-semibold">Gender: </h1>
              <div className="flex justify-start items-center gap-5 text-lg">
                <label htmlFor="Male" className="cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    id="Male"
                    className="cursor-pointer"
                  />
                  Male
                </label>
                <label htmlFor="Female" className="cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    id="Female"
                    className="cursor-pointer"
                  />
                  Female
                </label>
              </div>
            </div>
            <label htmlFor="height" className="flex items-center font-semibold">
              Height:
              <input
                type="number"
                placeholder="Feet"
                className="border border-sky-400 focus:outline-0 focus:rounded-md rounded-md ml-5 py-1 px-2 focus:shadow-md focus:shadow-cyan-500/50 w-1/2"
                value={feet}
                onChange={feetValue => setFeet(feetValue.target.value)}
              />
              <input
                type="number"
                placeholder="Inches"
                className="border border-sky-400 focus:outline-0 focus:rounded-md rounded-md ml-5 py-1 px-2 focus:shadow-md focus:shadow-cyan-500/50 w-1/2"
                value={inches}
                onChange={inchesValue => setInches(inchesValue.target.value)}
              />
            </label>
            <label htmlFor="weight" className="font-semibold">
              Weight
              <input
                type="number"
                placeholder="KG"
                className="border border-sky-400 focus:outline-0 focus:rounded-md rounded-md ml-5 py-1 px-2 focus:shadow-md focus:shadow-cyan-500/50 w-[80%]"
                value={kg}
                onChange={kgValue => setKg(kgValue.target.value)}
              />
            </label>
          </form>
          <button
            type="button"
            className="bg-sky-400 text-white py-1 px-4 rounded-md mx-auto block hover:shadow-md hover:shadow-cyan-500/50 text-2xl transition duration-300"
            onClick={calculate}
          >
            Calculate
          </button>
        </div>
      </div>
      {/* showing result */}
      <div className="shadow-md shadow-sky-600 px-4 py-2 w-fit mx-auto block">
        <h1>
          {BMI} =
          {BMI === 0
            ? ' nothing'
            : BMI < 18.5
              ? ' under weight'
              : BMI < 24.9
                ? ' normal'
                : BMI < 29.9
                  ? ' over weight'
                  : ' obesity'}
        </h1>
      </div>
    </>
  )
}

export default BMICalculator
