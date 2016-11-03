import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';

class AddLocation extends Component {
	constructor(props) {
		super(props);
		this.state = { cityName: ''}
		this.addLocation = this.addLocation.bind(this);
	}

	onInputChange(e) {
		if (e.key === 'Enter') {
			this.addLocation(e.target.value)
		}
		this.setState({
			cityName: e.target.value,
		});
	}

	addLocation(location) {
		if (location.trim()) {
			this.props.addLocation(location);
			browserHistory.push('/cities');
		}
	}

	render() {
		return (
			<div>
				<input type="text" onKeyPress={this.onInputChange.bind(this)} autoFocus={true}/>
				<button type="button" onClick={() => this.addLocation(this.state.cityName)}>Add City</button>
				<p>
					<Link to={'/cities'}>Back to list</Link>
				</p>
			</div>
		)
	}
}



export default AddLocation
