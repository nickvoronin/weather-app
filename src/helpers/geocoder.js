// https://developers.google.com/maps/documentation/geocoding/intro

function makeQuery(location) {
	// https://maps.googleapis.com/maps/api/geocode/json?address=Winnetka&key=YOUR_API_KEY
	// const baseURL = 'https://maps.googleapis.com/maps/api/geocode/json';
	// const format = 'json'
	// const type = 'address';
	const API_KEY = 'AIzaSyD8I2fHZ6qwNRovp6R2N7qngTNmfyMNTo0';

	// return `${baseURL}${format}?${type}=${location}key=${APIKEY}`;
	return `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=`+ API_KEY;
}

export function locationToCoordinates(location) {
	return fetch(makeQuery(location))
		.then(response => response.json())
		.then(json => json.results[0])
		.then(obj => obj.geometry.location)
		.catch(e => console.err(e.message))
}
