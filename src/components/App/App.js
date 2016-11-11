import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

	static propTypes = {
		children: PropTypes.object.isRequired,
	};

	static childContextTypes = {
		currentLanguage: PropTypes.string.isRequired
	};

	getChildContext() {
		return {
			currentLanguage: this.props.currentLanguage
		};
	}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Meteo App</h2>
        </div>
				<select value={this.props.currentLanguage}
					onChange={(e) => {
						this.props.changeLanguage(e.target.value)
					}}>
				  <option value="ru">ru</option>
				  <option value="en">en</option>
				</select>
        {this.props.children}
      </div>
    );
  }
}

export default App;
