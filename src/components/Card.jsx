import CardData from './jsonData/Card.json'

function Card() {
  return (
    <>
      {CardData.map(info => (
        <div
          key={info.id}
          className="w-[200px] h-full p-4 rounded-md relative mx-auto mt-4"
        >
          <div className="top-0 absolute bg-blue-500 p-2 w-[200px] h-[80px] text-center rounded-sm" />
          <div className="absolute w-[200px] h-[200px] shadow-lg shadow-blue-700 rounded-lg">
            <div className="absolute top-5 left-[30%] w-[90px] h-[90px] bg-red-400 rounded-full">
              <h1 className="text-sm text-center mt-8  text-green-800 shadow-md rounded-lg">
                {info.name}
              </h1>
            </div>
            <div className="mt-28 text-center text-blue-600 text-sm shadow-lg p-2 rounded-lg shadow-gray-900 mx-4">
              <p>{info.username}</p>
              <p>{info.email}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
export default Card
