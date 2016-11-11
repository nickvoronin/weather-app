import { CHANGE_LANGUAGE } from '../constants/language';

function currentLanguage(state = 'en', action) {
	switch (action.type) {
		case CHANGE_LANGUAGE:
			return action.language;
		default: return state;
	}
}

export default currentLanguage;
