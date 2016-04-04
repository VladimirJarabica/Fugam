export default (flights = {
		query: '',
		data: []
	}, action) => {
	switch(action.type) {
		case 'RECEIVE_FLIGHTS':
			let newFlights = {}
			newFlights.data = action.flights
			newFlights.query = action.query
			return newFlights
		break
		default:
			return flights
	}
}