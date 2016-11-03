import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchLocationList, addLocation } from '../actions/locationListActions.js';

import AddLocation from '../components/AddLocation/AddLocation.js';


function mapStateToProps(globalState, ownProps) {
	return {
		locationList: globalState.locationList,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		addLocation: bindActionCreators(addLocation, dispatch),
		fetchLocationList: bindActionCreators(fetchLocationList, dispatch),
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(AddLocation);
