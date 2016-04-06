export default (loading = false, action) => {
	switch(action.type) {
		case 'ENABLE_LOADING':
			return true
		break
		case 'DISABLE_LOADING':
			return false
		default:
			return loading
	}
}