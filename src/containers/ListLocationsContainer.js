import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchLocationList } from '../actions/locationListActions.js';
import { selectLocation, removeLocation } from '../actions/locationActions.js';

import ListLocations from '../components/ListLocations/ListLocations.js';


function mapStateToProps(globalState, ownProps) {
	return {
		locationIds: globalState.location.locationIds,
		dataByLocation: globalState.location.dataByLocation
	};
}

function mapDispatchToProps(dispatch) {
	return {
		fetchLocationList: bindActionCreators(fetchLocationList, dispatch),
		selectLocation: bindActionCreators(selectLocation, dispatch),
		removeLocation: bindActionCreators(removeLocation, dispatch),		
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ListLocations);
