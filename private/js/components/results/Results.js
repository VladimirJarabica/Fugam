import React, { Component } from 'react'

import Result from './Result'
import Sortbar from './Sortbar'

class Results extends Component {
  constructor() {
    super()
    this.state = {
      limit: 10,
      addInfo: null
    }


    this.loadMore = this.loadMore.bind(this)
    this.hideOthers = this.hideOthers.bind(this)
    this.hideMe = this.hideMe.bind(this)
  }

  componentWillReceiveProps() {
    this.setState({
      limit: 10
    })
  }

  loadMore() {
    this.setState({
      limit: this.state.limit + 10
    })
  }

  hideOthers(key) {
    this.setState({
      addInfo: key
    })
  }
  hideMe(key) {
    this.setState({
      addInfo: null
    })
  }

  render() {
    let self = this
    return (
      <section id="center" className="clearfix">
        <Sortbar actions={this.props.actions} filters={this.props.filters} loadMore={this.loadMore} />
        <ul id="results_list">
        {
          self.props.flights.slice(0, self.state.limit).map((flight) => {
            return <Result hideOthers={this.hideOthers} hideMe={self.hideMe} componentKey={flight.id} key={flight.id} data={flight} addInfo={self.state.addInfo == flight.id} />
          })
        }
        </ul>
      </section>
    )
  }

}


export default Results
