import React, { PropTypes } from 'react';
import translate from '../../helpers/translate.js';
import { Link } from 'react-router';
import GoogleMap from '../LocationOnMap/GoogleMap'


class LocationDetails extends React.Component {

	static propTypes = {
		strings: PropTypes.object.isRequired,
	}

	static defaultProps = {
		strings: {
			fetchingText: 'Fetching weather...',
			text1: `В`,
			text2: `сейчас`,
			text3: `градусов`,
		},
	}

	componentDidMount() {
		const { locationId } = this.props;
		this.props.locationToCoordinatesToWeather(locationId);
	}

	renderFetching() {
		const { backToList } = this.props.strings;
		return (
			<div>
				<Link to={'/cities'}>{backToList}</Link>
			</div>
		)
	}

	renderWeather(data) {
		const { name, main } = data;
		const {temp } = main;
		const { backToList, reportPart1, reportPart2, reportPart3 } = this.props.strings;
		return (
			<div>
				<p>{`${reportPart1} ${name} ${reportPart2}
				${temp > 0 ? '+' : ''}
				${temp} ${reportPart3}`}</p>
				<Link to={'/cities'}>{backToList}</Link>
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

// export default LocationDetails;

export default translate('LocationDetails')(LocationDetails);
