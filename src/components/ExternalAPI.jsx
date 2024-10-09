import { useEffect, useState } from 'react'

function ExternalAPI() {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
      .catch(error => {
        setError(error)
      })
  }, [])
  if (error) {
    return <div>i have got an error of json api...</div>
  }
  return (
    <div>
      <ul>
        {data.map(userData => (
          <li
            key={userData.id}
            className="bg-black mt-2 text-center w-1/4 mx-auto p-2 rounded-md"
          >
            <span className="text-white">{userData.albumId}</span>
            <p className="bg-red-300 p-2 rounded">{userData.title}</p>
            <img
              src={userData.thumbnailUrl}
              alt=""
              className="p-4 bg-green-500 mx-auto mt-2"
            />
            <div>{error}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ExternalAPI
