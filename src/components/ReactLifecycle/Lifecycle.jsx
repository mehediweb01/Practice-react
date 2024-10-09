import React from 'react'

class Lifecycle extends React.Component {
  constructor(props) {
    super(props)
    this.state = { color: 'black', car: 'BMW' }
  }
  // static getDerivedStateFromProps(props, state) {
  //   return { color: props.favColor };
  // }
  changeColor = () => {
    this.setState({ color: 'blue' })
  }
  //update data off method ... default value is true
  shouldComponentUpdate() {
    return true
  }
  // getSnapshotBeforeUpdate(pre, update) {
  //     document.getElementById("#div1").innerHTML = `<h1>${update.color}</h1>`;
  // }
  //   componentDidMount() {
  //     setInterval(() => {
  //       this.setState({ color: 'green' });
  //     }, 1000);
  //   }

  render() {
    return (
      <>
        <h1>
          hello, my favorite color is {this.state.color} and favorite car is{' '}
          {this.state.car}
        </h1>
        <div id="div1"></div>
        <button
          onClick={this.changeColor}
          className="bg-sky-500 text-white px-4 py-1 rounded-sm"
        >
          click now
        </button>
        <button className="bg-sky-500 text-white px-4 py-1 rounded-sm">
          del here
        </button>
      </>
    )
  }
}

export default Lifecycle
