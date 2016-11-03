import { combineReducers } from 'redux';
import {
	ADD_LOCATION,
	SELECT_LOCATION,
	INVALIDATE_LOCATION,
	REQUEST_LOCATION,
	RECEIVE_LOCATION,
	REMOVE_LOCATION,
} from '../constants/location';

function locationIds(state = ['Chisinau', 'Shreveport'], action) {
	switch (action.type) {
		case ADD_LOCATION:{
			return [...state, action.location];
		}
		case REMOVE_LOCATION:{
			return state.filter(location => {
				return location !== action.location;
			})
		}
		default:
			return state;
	}
}

function selectedLocation(state = 'Chisinau', action) {
	switch (action.type) {
		case SELECT_LOCATION:
			return action.location;
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
		case INVALIDATE_LOCATION:
			return Object.assign({}, state, { didInvalidate: true });
		case REQUEST_LOCATION:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			});
		case RECEIVE_LOCATION:
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
		case INVALIDATE_LOCATION:
		case RECEIVE_LOCATION:
		case REQUEST_LOCATION:
			return Object.assign({}, state, {
				[action.location]: locationDetails(state[action.location], action)
			});
		default:
			return state;
	}
}

const combined = combineReducers({ locationIds, selectedLocation, dataByLocation });

export default combined;
