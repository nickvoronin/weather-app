import fetch from 'isomorphic-fetch';
import {
	SELECT_LOCATION,
	INVALIDATE_LOCATION,
	REQUEST_LOCATION,
	RECEIVE_LOCATION,
	REMOVE_LOCATION,
} from '../constants/location.js';

// TESTIN!!
import { locationToCoordinates } from '../helpers/geocoder.js';
// locationToCoordinates('Chisinau')
// 	.then( json => console.log(json));


function prepareWeatherURLByLocation(location) {
	// api.openweathermap.org/data/2.5/weather?q={city name}
	const query = '?q=' + location;
	const baseURL = 'http://api.openweathermap.org/data/2.5/';
	const type = 'weather';
	const API_KEY = ',uk&appid=' + '2312fbdc787a3bdd41bc6436299dd179'; // eslint-disable-line
	const units = '&units=metric';

	return  baseURL + type + query + API_KEY + units;
}

function prepareWeatherURLByCoordinates({ lat, lng } = {}) {
	// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}
	const query = '?lat=' + lat + '&lon=' + lng;
	const baseURL = 'http://api.openweathermap.org/data/2.5/';
	const type = 'weather';
	const API_KEY = ',uk&appid=' + '539b53ac08d6128b53d40b64c3f7252b'; // eslint-disable-line
	const units = '&units=metric';

	return  baseURL + type + query + API_KEY + units;
}


export function locationToCoordinatesToWeather(location) {
	return function(dispatch) {
		dispatch(requestLocation(location));

		return locationToCoordinates(location)
			.then(coordinates => {
				return fetch(prepareWeatherURLByCoordinates(coordinates))
			})
			.then(response => {
				if (response.ok) {
					return response
				} else {
					// Failed to get location weather by coordinates
					// Fall back to openweather's location detection by it's name
					return fetch(prepareWeatherURLByLocation(location))
				}
			})
			.then(response => response.json())
			.then(json => {
				// console.log(json);
				dispatch(receiveLocation(location, json));
			})
			.catch(e => {
				console.err(e)
			})
	}
}


export function fetchLocation(location) {
	return function(dispatch) {
		dispatch(requestLocation(location));

		return fetch(prepareWeatherURLByLocation(location))
			.then(response => response.json())
			.then(json => {
				dispatch(receiveLocation(location, json));
			})
	}
}

export function removeLocation(location) {
	return {
		type: REMOVE_LOCATION,
		location,
	}
}

export function selectLocation(location) {
	return {
		type: SELECT_LOCATION,
		location
	}
}

export function invalidateLocation(location) {
	return {
		type: INVALIDATE_LOCATION,
		location
	}
}

function requestLocation(location) {
	return {
		type: REQUEST_LOCATION,
		location
	}
}

function receiveLocation(location, json) {
	return {
		type: RECEIVE_LOCATION,
		location,
		json,
		receivedAt: Date.now()
	}
}
