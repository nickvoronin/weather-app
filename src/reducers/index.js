import { combineReducers} from 'redux';
import location from './location';
import currentLanguage from './languageReducer';

export default combineReducers({
	location,
	currentLanguage,
});
