import { combineReducers } from 'redux';
import {
	ADD_LOCATION,
	INVALIDATE_LOCATION_LIST,
	REQUEST_LOCATION_LIST,
	RECEIVE_LOCATION_LIST,
} from '../constants/listLocations';



function selectedLocation(state = 'Chisinau', action) {
	switch (action.type) {
		// case SELECT_LOCATION:
		// 	return action.location;
		default:
			return state;
	}
}

function locationDetails(state = {
	isFetching: false,
	didInvalidate: false,
	data: {}
}, action) {
	switch (action.type) {
		case INVALIDATE_LOCATION_LIST:
			return Object.assign({}, state, { didInvalidate: true });
		case REQUEST_LOCATION_LIST:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			});
		case RECEIVE_LOCATION_LIST:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				data: action.json,
				lastUpdated: action.receivedAt
			});
		default:
			return state;
	}
}

function dataByLocation(state = {}, action) {
	switch (action.type) {
		case INVALIDATE_LOCATION_LIST:
		case RECEIVE_LOCATION_LIST:
		case REQUEST_LOCATION_LIST:
			return Object.assign({}, state, {
				[action.location]: locationDetails(state[action.location], action)
			});
		default:
			return state;
	}
}

const combined = combineReducers({ selectedLocation, dataByLocation });

export default combined;








// function locations(state = {
// 	isFetching: false,
// 	didInvalidate: false,
// 	dataByLocation: {},
// 	locations: ['Chisinau', 'London']
// }, action) {
// 	switch (action.type) {
// 		case INVALIDATE_LOCATION_LIST:
// 			return Object.assign({}, state, { didInvalidate: true });
// 		case ADD_LOCATION:
// 			return Object.assign({}, state, {
// 				locations: [...state.locations, action.location]
// 			});
// 		case REQUEST_LOCATION_LIST:
// 			return Object.assign({}, state, {
// 				isFetching: true,
// 				didInvalidate: false
// 			});
// 		case RECEIVE_LOCATION_LIST:
// 			console.log('state rec');
// 			console.log(state);
// 			return Object.assign({}, state, {
// 				isFetching: false,
// 				didInvalidate: false,
// 				dataByLocation: action.json,
// 				lastUpdated: action.receivedAt
// 			});
// 		default:
// 			return state;
// 	}
// }
//
//
// export default locations;
