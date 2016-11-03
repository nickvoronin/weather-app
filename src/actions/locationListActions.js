import fetch from 'isomorphic-fetch';
import {
	INVALIDATE_LOCATION_LIST,
	REQUEST_LOCATION_LIST,
	RECEIVE_LOCATION_LIST,
} from '../constants/listLocations.js';
import { ADD_LOCATION } from '../constants/location.js';


function prepareRequest(location) {
	const query = '?q=' + location;
	const _baseURL = 'http://api.openweathermap.org/data/2.5/';
	const type = 'weather';
	const _APIKEY = ',uk&appid=' + '2312fbdc787a3bdd41bc6436299dd179'; // eslint-disable-line
	const units = '&units=metric';

	return  _baseURL + type + query + _APIKEY + units;
}


export function addLocation(location) {
	return {
		type: ADD_LOCATION,
		location
	}
}

export function invalidateLocationList() {
	return {
		type: INVALIDATE_LOCATION_LIST,
	}
}

function requestLocationList(locations) {
	return {
		type: REQUEST_LOCATION_LIST,
		locations
	}
}

function receiveLocationList(json) {
	return {
		type: RECEIVE_LOCATION_LIST,
		json,
		receivedAt: Date.now()
	}
}

export function fetchLocationList(location) {
	return function(dispatch) {
		dispatch(requestLocationList(location));

		return fetch(prepareRequest(location))
			.then(response => response.json())
			.then(json => {
				dispatch(receiveLocationList(json))
			})
	}
}
