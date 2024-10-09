import { useState } from 'react'
import Greetings from './Greetings'

function IsLogin() {
  const [LogIn, setLogIn] = useState(false)
  return (
    <div>
      <div style={{ width: '90%', margin: '10px auto' }}>
        <button
          type="button"
          onClick={() => setLogIn(!LogIn)}
          style={{
            padding: '4px',
            fontSize: '22px',
            background: 'green',
            width: '100%',
            border: 'none',
            outline: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            color: 'white',
          }}
        >
          {LogIn ? 'log out' : 'login'}
        </button>
      </div>
      <Greetings IsLogins={LogIn} />
    </div>
  )
}
export default IsLogin
