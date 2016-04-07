import React, { Component } from 'react'

import InputPlace from './InputPlace'
import InputDate from './InputDate'

import reqwest from 'reqwest'

class Filter extends Component {

  constructor() {
    super()
    this.state = {
      filterValues: {
        flyFrom: '',
        flyFromValue: '',
        to: '',
        toValue: '',
        dateFrom: null,
        dateToValue: null,
        returnFrom: null,
        returnFromValue: null,
        returnTo: null,
        returnToValue: null
      },
      returnFlight: false
    }

    this.setFilterValue = this.setFilterValue.bind(this)
    this.addReturnFlight = this.addReturnFlight.bind(this)
    this.removeReturnFlight = this.removeReturnFlight.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  setFilterValue(name, displayValue, searchValue) {
    let filterValues = this.state.filterValues
    filterValues[`${name}Value`] = displayValue
    filterValues[name] = searchValue
    this.setState({
      filterValues
    })
  }

  addReturnFlight() {
    this.setState({
      returnFlight: true
    })
  }

  removeReturnFlight() {
    let newState = Object.assign({}, this.state)
    newState.returnFlight = false
    newState.filterValues.returnFrom = newState.filterValues.returnTo = null
    this.setState(newState, () => {
      this.props.actions.getFlights(this.state.filterValues)
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.actions.getFlights(this.state.filterValues)

  }

  render() {
    let self = this;

    let today = (new Date()).toISOString().slice(0, 10)

    let returnFlight = null;
    if(!self.state.returnFlight) {
      returnFlight = (
        <div>
          <div id="add_return_wrapper">
            <div className="col col-xs-12">
              <button className="btn" type="button" className="btn" id="add_return_button" onClick={self.addReturnFlight}>Add return flight</button>
            </div>
          </div>
        </div>
        )
    } else {
      returnFlight = (
        <div>
          <div id="return_flight" className="clearfix">
            <p>Return flight</p>
            <InputDate name="returnFrom" value={self.state.filterValues.returnFromValue} setValue={self.setFilterValue} placeholder="Date from"  min={this.state.filterValues.dateToValue ? this.state.filterValues.dateToValue : today} max={this.state.filterValues.returnToValue ? this.state.filterValues.returnToValue : ''} />
            <InputDate name="returnTo" value={self.state.filterValues.returnToValue} setValue={self.setFilterValue} placeholder="Date to" min={this.state.filterValues.returnFromValue ? this.state.filterValues.returnFromValue : today} max={''} />
          </div>
          <div id="remove_return_wrapper">
            <div className="col col-xs-12">
              <button className="btn" type="button" className="btn" id="remove_return_button" onClick={self.removeReturnFlight}>Only direct flight</button>
            </div>
          </div>
        </div>)
    }
    return (
      <section id="left">
        <header>
          <h1>Fugam</h1>
        </header>
        <form id="filters" onSubmit={self.handleSubmit}>
          <div id="directflight_filters" className="clearfix">
            <InputPlace name="flyFrom" value={self.state.filterValues.flyFromValue} setValue={self.setFilterValue} placeholder="Departure" />
            <InputPlace name="to" value={self.state.filterValues.toValue} setValue={self.setFilterValue} placeholder="Arrival" />
            <InputDate name="dateFrom" value={self.state.filterValues.dateFromValue} setValue={self.setFilterValue} placeholder="Date from" min={today} max={this.state.filterValues.dateToValue ? this.state.filterValues.dateToValue : ''} />
            <InputDate name="dateTo" value={self.state.filterValues.dateToValue} setValue={self.setFilterValue} placeholder="Date to" min={this.state.filterValues.dateFromValue ? this.state.filterValues.dateFromValue : today} max={this.state.filterValues.returnFromValue ? this.state.filterValues.returnFromValue : ''} />
          </div>
          {returnFlight}
          <div id="search_wrapper">
            <div className="col col-xs-12">
              <input type="submit" className="btn" name="submit" value="Search!" />
            </div>
          </div>
        </form>
      </section>
    )
  }

}


export default Filter
