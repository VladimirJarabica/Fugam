import React, { Component } from 'react'

class Sortbas extends Component {

  render() {
    return (
      <div id="sort_bar" className="clearfix">
        <span className="sort_item">Sort</span>
        <ul id="sort_list">
          <li className="sort_item"><button className="btn" type="button">Best</button></li>
          <li className="sort_item"><button className="btn" type="button">Cheapest</button></li>
          <li className="sort_item"><button className="btn" type="button">Shortest</button></li>
          <li className="sort_item"><button className="btn" type="button">Earliest</button></li>
          <li className="sort_item"><button className="btn" type="button" onClick={this.props.loadMore}>Add 10 more</button></li>
        </ul>
      </div>
    )
  }

}


export default Sortbas
