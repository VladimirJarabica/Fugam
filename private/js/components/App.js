import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'

import Filter from './filter/Filter'
import Results from './results/Results'

class App extends Component {

  render() {
    return (
      <main id="detail">
        <Filter actions={this.props.actions} />
        {
          (() => {
            if(this.props.flights.data.length > 0) {
              console.log('render Results')
              return <Results flights={this.props.flights.data} />
            }
          })()
        }
      </main>
    )
  }

}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
