import Child from './Child'

function Parents() {
  function clickMe() {
    alert('You are click the button')
  }
  return (
    <>
      <h1>Parent component</h1>
      <Child myFun={clickMe} />
    </>
  )
}
export default Parents
