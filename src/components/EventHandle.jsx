import { useState } from 'react'

export default function EventHandle() {
  const colorObj = {
    background: 'green',
    color: 'black',
    fonSize: '22px',
    width: '50%',
    margin: 'auto',
    textAlign: 'center',
  }
  // onclick
  const [state, setShot] = useState(true)
  // onchange
  const [changes, setChange] = useState('on change event')
  const change = props => {
    setChange(props.target.value)
  }
  // onKeyup
  const [keys, setKeys] = useState('keyup event')
  // onkeypress
  const [keyPress, setKeyPress] = useState('key press event')
  // mouseOver
  const black = { background: 'black', color: 'white' }
  const [colors, setColors] = useState(black)
  return (
    <>
      {/* onClick event */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <p>{!state ? 'hello world' : 'please click here now'}</p>
        <button type="button" onClick={() => setShot(!state)}>
          click here
        </button>
      </div>
      {/* onChange event */}
      <div style={{ width: '90%', margin: '20px' }}>
        <p>{changes}</p>
        <input type="text" placeholder="enter your text" onChange={change} />
      </div>
      {/* onKeyup */}
      <div style={{ width: '90%', margin: '20px' }}>
        <p>{keys}</p>
        <input type="text" onKeyUp={e => setKeys(e.code)} />
      </div>
      {/* onkeypress */}
      <div style={{ width: '90%', margin: '20px' }}>
        <p>{keyPress}</p>
        <input type="text" onKeyPress={e => setKeyPress(e.target.value)} />
      </div>
      {/* onMouseOver */}
      <div onMouseOver={() => setColors(colorObj)}>
        <p style={colors}>Lorem ipsum dolor sit amet.</p>
      </div>
      {/* oncopy */}
      <div>
        <p onCopy={() => alert('no copy please!!')}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
          possimus atque dolorem consectetur odit. Distinctio?
        </p>
      </div>
      {/* onselect */}
      <div>
        <p onSelect={() => alert('selected it')}>Lorem, ipsum.</p>
      </div>
      {/* onpaste */}
      <div>
        <input
          type="text"
          onPaste={props => (
            (props.target.type = 'button'), (props.target.value = 'no paste')
          )}
        />
      </div>
    </>
  )
}
