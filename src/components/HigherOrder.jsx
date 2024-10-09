function HigherOrder() {
  const higher = PropsFunc => {
    return function (props) {
      return <PropsFunc {...props} />
    }
  }
  function MainComponent() {
    return <h1>This is a main component</h1>
  }

  const ConnectingComponent = higher(MainComponent)

  return <ConnectingComponent />
}

export default HigherOrder
