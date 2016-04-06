import React, { Component } from 'react'


import * as timeUtils from '../../utils/timeUtils'

import ResultAddInfo from './ResultAddInfo'


class Result extends Component {

	constructor() {
		super()
		this.state = {
			addInfo: false
		}

		this.toggleAddInfo = this.toggleAddInfo.bind(this)
	}

	componentWillReceiveProps(nextProps) {
		console.log('componentWillReceiveProps', nextProps)
		this.setState({
			addInfo: nextProps.addInfo
		})
	}

	toggleAddInfo() {
		if(!this.state.addInfo)
			this.props.hideOthers(this.props.componentKey)
		else
			this.props.hideMe(this.props.componentKey)
	}


  render() {

  	let result = this.props.data
  	let self = this

		let routesThere = result.route.filter((route) => {
			return route.return === 0
		})
		let routesBack = result.route.filter((route) => {
			return route.return === 1
		})
    
    return (
        <li onClick={this.toggleAddInfo} className="result col col-sm-12 col-md-6 col-lg-6 col-xl-4">
        	<div className="result_wrapper">
						<div className="result_seg clearfix">
							<div className="row">
								<div className="route_detail col col-xs-8">
									<span className="from">{result.cityFrom} ({result.flyFrom}) -</span>
									<span className="to">{result.cityTo} ({result.flyTo})</span>
								</div>
								<div className="route_price col col-xs-2 col-xs-offset-2">
									<span className="price">{result.conversion.EUR}€</span>
								</div>
							</div>
							<div className="row">
								<div className="route_date col col-xs-4">
									<span className="date">
										{timeUtils.getDateFromUTC(result.aTimeUTC)}
									</span>
								</div>
								<div className="route_time col col-xs-4 col-xs-offset-1">
									<span className="time">{timeUtils.getTimeFromUTC(result.dTimeUTC)} - {timeUtils.getTimeFromUTC(result.aTimeUTC)}</span>
								</div>
								<div className="route_airline_logo col col-xs-2 col-xs-offset-1">
									<img src={`https://s3-eu-west-1.amazonaws.com/images.skypicker.com/airlines/32/${result.route[0].airline}.png`} alt="logo" className="logo" />
								</div>
							</div>
						</div>
						{
							(() => {
								if(self.state.addInfo)
									return <ResultAddInfo routesThere={routesThere} routesBack={routesBack} />
							})()
						}
        	</div>
        </li>
    )
  }


}


export default Result
