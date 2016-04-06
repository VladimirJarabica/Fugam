import reqwest from 'reqwest'

let actions = {
	receiveFlights: (flights, filters) => {
		return {
			type: 'RECEIVE_FLIGHTS',
			flights,
			filters

		}
	},

	addFilter:({ type, value }) => {
		return {
			type: 'ADD_FILTER',
			filter: {
				type,
				value
			}
		}
	},

	getFlights: (filters) => {
		//TODO Build query
		let query = `https://api.skypicker.com/flights?v=2&locale=en`
		if(filters.sort)
			query += `&sort=${filters.sort}`
		query += `&flyFrom=${filters.flyFrom}&to=${filters.to}&dateFrom=${filters.dateFrom}&dateTo=${filters.dateTo}`
    if(filters.returnFrom && filters.returnTo)
      query += `&typeFlight=return&returnFrom=${filters.returnFrom}&returnTo=${filters.returnTo}`
		console.log('getFlights', query);
		return (dispatch) => {
			dispatch(actions.enableLoading())
			reqwest(query, (resp) => {
				dispatch(actions.disableLoading())
				dispatch(actions.receiveFlights(resp.data, filters))
	    })
		}
	},

	enableLoading: () => {
		return ({
			type: 'ENABLE_LOADING'
		})
	},
	disableLoading: () => {
		return ({
			type: 'DISABLE_LOADING'
		})
	}
}

export default actions