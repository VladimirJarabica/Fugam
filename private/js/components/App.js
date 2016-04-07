import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'

import Filter from './filter/Filter'
import Results from './results/Results'
import Loading from './others/Loading'
import NoFlights from './others/NoFlights'

class App extends Component {

  render() {
    return (
      <main id="detail">
        <Filter actions={this.props.actions} />
        {
          (() => {
            if(this.props.loading) {
              return <Loading />
            }
            if(this.props.flights.data.length > 0) {
              return <Results actions={this.props.actions} flights={this.props.flights.data} filters={this.props.flights.filters}/>
            } else {
              return <NoFlights />
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
