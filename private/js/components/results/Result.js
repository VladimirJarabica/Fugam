import React, { Component } from 'react'


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
										{this.getDateFromUTC(result.aTimeUTC)}
									</span>
								</div>
								<div className="route_time col col-xs-4 col-xs-offset-1">
									<span className="time">{this.getTimeFromUTC(result.dTimeUTC)} - {this.getTimeFromUTC(result.aTimeUTC)}</span>
								</div>
								<div className="route_airline_logo col col-xs-2 col-xs-offset-1">
									<img src={`https://s3-eu-west-1.amazonaws.com/images.skypicker.com/airlines/32/${result.route[0].airline}.png`} alt="logo" className="logo" />
								</div>
							</div>
						</div>
						{
							(() => {
								//Additional info
								let routesThere = result.route.filter((route) => {
									return route.return === 0
								})
								let routesBack = result.route.filter((route) => {
									return route.return === 1
								})
								if(self.state.addInfo)
									return (
										<div className="result_add clearfix">
											<div className="route_there">
											{
												routesThere.map((route) => {
													return (
													<div className="row route">
														<div className="route_detail col col-xs-6">
															<div className="dest_from row">
																<span className="dest_from_text col col-xs-6">{route.cityFrom}</span><span className="dest_from_date col col-xs-6">{self.getTimeFromUTC(route.dTimeUTC)} {self.getDateFromUTC(route.dTimeUTC)}</span>
															</div>
															<div className="dest_from_to_row row">
																<i className="dotts fa fa-ellipsis-v col col-xs-6"></i><span className="route_time col col-xs-6">{self.getIntervalBetweenTimes(route.aTimeUTC, route.dTimeUTC)}</span>
															</div>
															<div className="dest_to row">
																<span className="dest_to_text col col-xs-6">Paris</span><span className="dest_from_date col col-xs-6">{self.getTimeFromUTC(route.aTimeUTC)} {self.getDateFromUTC(route.aTimeUTC)}</span>
															</div>
														</div>
														<div className="route_add_info col col-xs-6">
															<div className="route_logo">
																<img src={`https://s3-eu-west-1.amazonaws.com/images.skypicker.com/airlines/32/${route.airline}.png`} alt="logo" className="logo" />
															</div>
															<div className="route_flight_info">
																<span className="info">Flight no. {route.airline} {route.flight_no}</span>
															</div>
														</div>
													</div>
														)
												})
											}
											</div>
										</div>
										)
							})()
						}
        	</div>
        </li>
    )
  }

  getDateFromUTC(utcSeconds) {
		let d = new Date(0)
		d.setUTCSeconds(utcSeconds)
		let format = `${d.getDate()}.${d.getMonth()}.${d.getFullYear()}`
		return format
  }

  getTimeFromUTC(utcSeconds) {
		let d = new Date(0)
		d.setUTCSeconds(utcSeconds)
		let format = `${d.getHours()}:${d.getMinutes()}`
		return format
  }

  getIntervalBetweenTimes(time1, time2) {
  	let totalSec = time1 - time2
  	let hours = parseInt( totalSec / 3600 ) % 24
		let minutes = parseInt( totalSec / 60 ) % 60
		return '' + hours + 'h ' + minutes + 'm'
  }

}


export default Result
