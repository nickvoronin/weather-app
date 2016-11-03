import React, { Component } from 'react';
import LocationPreview from '../LocationPreview/LocationPreview';
import './styles.css'
import { Link } from 'react-router';


class ListLocations extends Component {

	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}

	componentWillMount() {
		// this.props.fetchLocationList(this.props.locationIds);
	}

	render () {
		const { locationIds, dataByLocation,
			selectLocation, removeLocation } = this.props;
		const locations = locationIds.map((location, id) => {
			return <LocationPreview
				name={location}
				key={id}
				data={dataByLocation[location]}
				selectLocation={selectLocation}
				removeLocation={removeLocation}/>
		});

		return (
			<div className='locations'>
				<ul>{locations}</ul>
				<Link to={'/add'}>+</Link>
			</div>
		)
	}
}

export default ListLocations;
