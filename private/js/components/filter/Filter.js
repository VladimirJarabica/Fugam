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
        to: '',
        dateFrom: null,
        dateTo: null,
        returnFrom: null,
        returnTo: null
      },
      returnFlight: false
    }

    this.setFilterValue = this.setFilterValue.bind(this)
    this.addReturnFlight = this.addReturnFlight.bind(this)
    this.removeReturnFlight = this.removeReturnFlight.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  setFilterValue(name, value) {
    let filterValues = this.state.filterValues
    filterValues[name] = value
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
    console.log(this.state.filterValues)
    /*let query = `https://api.skypicker.com/flights?v=2&locale=en&flyFrom=${this.state.filterValues.flyFrom}&to=${this.state.filterValues.to}&dateFrom=${this.state.filterValues.dateFrom}&dateTo=${this.state.filterValues.dateTo}`
    if(this.state.returnFlight)
      query += `&typeFlight=return&returnFrom=${this.state.filterValues.returnFrom}&returnTo=${this.state.filterValues.returnTo}`*/
    this.props.actions.getFlights(this.state.filterValues)

  }

  render() {
    let self = this;

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
            <InputDate name="returnFrom" value={self.state.filterValues.returnFrom} setValue={self.setFilterValue} placeholder="Date from" />
            <InputDate name="returnTo" value={self.state.filterValues.returnTo} setValue={self.setFilterValue} placeholder="Date to" />
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
            <InputPlace name="flyFrom" value={self.state.filterValues.flyFrom} setValue={self.setFilterValue} placeholder="Departure" />
            <InputPlace name="to" value={self.state.filterValues.to} setValue={self.setFilterValue} placeholder="Arrival" />
            <InputDate name="dateFrom" value={self.state.filterValues.dateFrom} setValue={self.setFilterValue} placeholder="Date from" />
            <InputDate name="dateTo" value={self.state.filterValues.dateTo} setValue={self.setFilterValue} placeholder="Date to" />
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
