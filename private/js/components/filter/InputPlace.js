import React, { Component } from 'react'

class InputPlace extends Component {

  handleChange(e) {
    this.props.setValue(this.props.name, e.target.value)
  }

  render() {
    return (
      <div className="col col-xs-12">
      	<input onChange={this.handleChange.bind(this)} value={this.props.value} type="text" name={this.props.name} placeholder={this.props.placeholder} />
      </div>
    )
  }

}


export default InputPlace
