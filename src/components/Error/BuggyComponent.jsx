import React from 'react'

function BuggyComponent() {
  throw new Error('I have  a error')
  return <h1>good for us</h1>
}

export default BuggyComponent
