import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeLanguage } from '../actions/changeLanguage.js';

import App from '../components/App/App.js';


function mapStateToProps(globalState, ownProps) {
	return {
		currentLanguage: globalState.currentLanguage,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		changeLanguage: bindActionCreators(changeLanguage, dispatch),
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
