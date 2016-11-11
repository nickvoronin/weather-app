import React, { PropTypes } from 'react';
import en from '../i18n/en';
import ru from '../i18n/ru';

const languages = {
  en,
  ru,
};

export default function translate(key) {
  return Component => {
    class TranslationComponent extends React.Component {
      render() {
        var strings = languages[this.context.currentLanguage][key];
        return <Component {...this.props} {...this.state} strings={strings} />;
      }
    }

    TranslationComponent.contextTypes = {
      currentLanguage: PropTypes.string
    };

    return TranslationComponent;
  };
}
