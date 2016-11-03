import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button, Col, Row } from 'react-bootstrap';
import './styles.css'

const LocationPreview = (props) => {
	const { name, data, selectLocation, removeLocation } = props;
	return (
		<li>
				<Row>
					<Col md={8}>
						<Link
							to={`/cities/${name}`}
							onClick={() => selectLocation(name)}>
							{props.name}
						</Link>
					</Col>
					<Col md={2}><span>{(data && !data.isFetching) ? ` ${data.data.main.temp}`: ''}</span></Col>
					<Col md={2}>
						<Button
							bsStyle="danger"
							onClick={() => removeLocation(name)}>
							-
						</Button>
					</Col>
				</Row>

		</li>
	)
}
LocationPreview.propTypes = {
	name: PropTypes.string.isRequired,
}

export default LocationPreview;
