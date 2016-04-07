import React, { Component } from 'react'

import * as timeUtils from '../../utils/timeUtils'

class ResultAddInfo extends Component {

  render() {
    let self = this
    return (
      <div className="result_add clearfix">
        <div className="route_there">
        {
          this.props.routesThere.map((route) => {
            return (
            <div className="row route">
              <div className="route_detail col col-xs-6">
                <div className="dest_from row">
                  <span className="dest_from_text col col-xs-6">{route.cityFrom}</span><span className="dest_from_date col col-xs-6">{timeUtils.getTimeFromUTC(route.dTimeUTC)} {timeUtils.getDateFromUTC(route.dTimeUTC)}</span>
                </div>
                <div className="dest_from_to_row row">
                  <i className="dotts fa fa-ellipsis-v col col-xs-6"></i><span className="route_time col col-xs-6">{timeUtils.getIntervalBetweenTimes(route.aTimeUTC, route.dTimeUTC)}</span>
                </div>
                <div className="dest_to row">
                  <span className="dest_to_text col col-xs-6">{route.cityTo}</span><span className="dest_from_date col col-xs-6">{timeUtils.getTimeFromUTC(route.aTimeUTC)} {timeUtils.getDateFromUTC(route.aTimeUTC)}</span>
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
        {
          (() => {
            if(self.props.routesBack.length > 0)
              return (
                <div className="route_back">
                  <div classname="row">
                    <p className="return_flight col col-xs-12">Return flight</p>
                  </div>
                  {
                    this.props.routesBack.map((route) => {
                      return (
                      <div className="row route">
                        <div className="route_detail col col-xs-6">
                          <div className="dest_from row">
                            <span className="dest_from_text col col-xs-6">{route.cityFrom}</span><span className="dest_from_date col col-xs-6">{timeUtils.getTimeFromUTC(route.dTimeUTC)} {timeUtils.getDateFromUTC(route.dTimeUTC)}</span>
                          </div>
                          <div className="dest_from_to_row row">
                            <i className="dotts fa fa-ellipsis-v col col-xs-6"></i><span className="route_time col col-xs-6">{timeUtils.getIntervalBetweenTimes(route.aTimeUTC, route.dTimeUTC)}</span>
                          </div>
                          <div className="dest_to row">
                            <span className="dest_to_text col col-xs-6">{route.cityTo}</span><span className="dest_from_date col col-xs-6">{timeUtils.getTimeFromUTC(route.aTimeUTC)} {timeUtils.getDateFromUTC(route.aTimeUTC)}</span>
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
                )
          })()
        }
      </div>
    )
  }

}


export default ResultAddInfo
