import React from 'react'

class CC extends React.Component {
  //類別 兩個方法
  //類別型元件
  constructor() {
    super()
    this.state = { total: 0 }
  }

  render() {
    return (
      <>
        <h1
          onClick={() => {
            this.setState({ total: this.state.total + 1 })
          }}
        >
          {this.state.total}
        </h1>
        <button>+1</button>
        <button>-1</button>
      </>
    )
  }
}

export default CC
