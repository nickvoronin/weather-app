import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchLocation, locationToCoordinatesToWeather } from '../actions/locationActions.js';

import LocationDetails from '../components/LocationDetails/LocationDetails.js';


function mapStateToProps(globalState, ownProps) {
	return {
		dataByLocation: globalState.location.dataByLocation,
		locationId: globalState.location.selectedLocation
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchLocation: bindActionCreators(fetchLocation, dispatch),
		locationToCoordinatesToWeather: bindActionCreators(locationToCoordinatesToWeather, dispatch),
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(LocationDetails);
