import React, { Component } from 'react'

class Sortbas extends Component {

  handleSort(type) {
    let filters = Object.assign({}, this.props.filters, { sort: type })
    this.props.actions.getFlights(filters)
  }

  render() {
    return (
      <div id="sort_bar" className="clearfix">
        <span className="sort_item">Sort</span>
        <ul id="sort_list">
          <li className="sort_item"><button onClick={this.handleSort.bind(this, 'quality')} className="btn" type="button">Best</button></li>
          <li className="sort_item"><button onClick={this.handleSort.bind(this, 'price')} className="btn" type="button">Cheapest</button></li>
          <li className="sort_item"><button onClick={this.handleSort.bind(this, 'duration')} className="btn" type="button">Shortest</button></li>
          <li className="sort_item"><button onClick={this.handleSort.bind(this, 'date')} className="btn" type="button">Earliest</button></li>
          <li className="sort_item"><button onClick={this.props.loadMore} className="btn" type="button">Add 10 more</button></li>
        </ul>
      </div>
    )
  }

}


export default Sortbas
