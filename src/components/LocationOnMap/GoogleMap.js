/*
 * Base Google Map example
 */
import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react';
import MyGreatPlace from './my_great_place.jsx';
import './mapStyle.css';

export default class SimpleMapPage extends Component {
  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    greatPlaceCoords: PropTypes.any
  };

  static defaultProps = {
    center: [59.938043, 30.337157],
    zoom: 6,
    greatPlaceCoords: {
			lat: 59.724465,
			lng: 30.080121
		}
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  // constructor(props) {
  //   super(props);
  // }

  render() {
		const { lat, lon } = this.props.coord;
		const coords = {
			lat,
			lng: lon,
		}
		let temp = this.props.main.temp.toFixed(1);
		temp = temp > 0 ? `+${temp}` : temp;
    return (
			<div className='map'>
	       <GoogleMap
					bootstrapURLKeys={{key: 'AIzaSyD8I2fHZ6qwNRovp6R2N7qngTNmfyMNTo0'}}
	        center={[lat, lon]}
	        zoom={this.props.zoom}>
	        <MyGreatPlace {...coords} text={temp} /* road circle */ />
	      </GoogleMap>
      </div>
    );
  }
}

// <MyGreatPlace lat={59.955413} lng={30.337844} text={'A'} /* Kreyser Avrora */ />
