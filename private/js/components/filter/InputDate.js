import React, { Component } from 'react'

import * as timeUtils from '../../utils/timeUtils'

class InputDate extends Component {

  handleChange(e) {
    this.props.setValue(this.props.name, e.target.value, timeUtils.convertDateFormat(e.target.value))
  }

  render() {
    return (
      <div className="col col-xs-12">
      	<input min={this.props.min} max={this.props.max} onChange={this.handleChange.bind(this)} value={this.props.value} type="date" name={this.props.name} placeholder={this.props.placeholder} />
      </div>
    )
  }

}


export default InputDate
