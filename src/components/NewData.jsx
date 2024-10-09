import dataShow from './jsonData/NewData.json'

export default function NewData() {
  return (
    <>
      {dataShow.map(data => (
        <div
          key={data.id}
          style={{
            backgroundColor: 'red',
            color: 'black',
            width: 'max-content',
            margin: '10px auto',
            padding: '10px',
            borderRadius: '10px',
          }}
        >
          <p>{data.id}</p>
          <p>{data.title}</p>
          <p>{data.content}</p>
          {/* {nested map} */}
          {data.media.map(dta => (
            <div key={data.id}>
              <p>{dta.mediaName}</p>
              {dta.user.map(userInfo => (
                <div
                  key={data.id}
                  style={{
                    backgroundColor: 'black',
                    color: 'white',
                    padding: '4px',
                    borderRadius: '8px',
                  }}
                >
                  <span>{userInfo.id}, </span>
                  <span>{userInfo.totalUser}, </span>
                  <span>{userInfo.totalPicture} </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </>
  )
}
