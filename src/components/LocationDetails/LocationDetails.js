import React from 'react';
import { Link } from 'react-router';
import GoogleMap from '../LocationOnMap/GoogleMap'


class LocationDetails extends React.Component {

	componentDidMount() {
		const { locationId } = this.props;
		this.props.locationToCoordinatesToWeather(locationId);
	}

	renderFetching() {
		return (
			<div>
				<p>Fetching...</p>
				<Link to={'/cities'}>Back to list</Link>
			</div>
		)
	}

	renderWeather(data) {
		const { name, main } = data;
		return (
			<div>
				<p>В {name} сейчаc {main.temp} градусов</p>
				<Link to={'/cities'}>Back to list</Link>
				<GoogleMap {...data}/>
			</div>
		)
	}

	render () {
		const { locationId } = this.props;
		const location = this.props.dataByLocation[locationId] || {};
		const { isFetching = true, data } = location;

		return (isFetching) ? this.renderFetching() : this.renderWeather(data);
	}
}

export default LocationDetails;
