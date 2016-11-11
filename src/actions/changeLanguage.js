import { CHANGE_LANGUAGE } from '../constants/language';

export function changeLanguage(language) {
	return {
		type: CHANGE_LANGUAGE,
		language,
	}
}
