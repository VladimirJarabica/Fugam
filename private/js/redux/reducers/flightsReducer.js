export default (flights = {
		flights: { data: [],
		filters: {}},
	}, action) => {
	let newFlights = {};
	switch(action.type) {
		case 'RECEIVE_FLIGHTS':
			newFlights.data = action.flights
			newFlights.filters = action.filters
			return newFlights
		break
		case 'ADD_FILTER':
			newFlights = Object.assign({}, flights)
			newFlights.filters[action.filter.type] = action.filter.value
			return newFlights
		default:
			return flights
	}
}