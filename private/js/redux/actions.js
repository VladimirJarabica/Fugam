import reqwest from 'reqwest'

let actions = {
	receiveFlights: (flights, query) => {
		return {
			type: 'RECEIVE_FLIGHTS',
			flights,
			query

		}
	},

	getFlights: (query) => {
		return (dispatch) => {
			reqwest(query, (resp) => {
				dispatch(actions.receiveFlights(resp.data, query))
	    })
		}
	}
}

export default actions