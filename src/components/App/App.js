import React, { Component } from 'react';
// import { Link } from 'react-router';
// import { Navbar } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Meteo App</h2>
        </div>
			{/*	<Navbar className='container'>
	        <ul className='nav nav-pills'>
	          <li><Link onlyActiveOnIndex={true} to='/'>details</Link></li>
	          <li><Link to='/cities'>cities</Link></li>
	          <li><Link to='/add'>add</Link></li>
	        </ul>
	      </Navbar>
*/}
        {this.props.children}
      </div>
    );
  }
}

export default App;
