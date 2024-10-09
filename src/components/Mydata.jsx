import MyData from './jsonData/Category.json'
import CategoryDetails from './jsonData/CatogoriesDetails.json'

function ShowData() {
  return (
    <>
      {MyData.map(categories => (
        <div className="mx-5 rounded-xl bg-black p-4 mb-2">
          <h1 className="bg-green-800 text-white text-center text-3xl">
            {categories.category}
          </h1>
          <div className="bg-red-300 mb-5 text-black p-4">
            {CategoryDetails.map(details => (
              <p>
                {categories.category === details.category
                  ? details.content
                  : null}
              </p>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}
export default ShowData
