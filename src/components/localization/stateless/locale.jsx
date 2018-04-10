import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import zh from '../translations/cn';
import en from '../translations/en';

const localeData = { zh, en };

class LocaleProvider extends React.Component {
  static propTypes = {
    locale: PropTypes.string,
    children: PropTypes.element.isRequired,
  };

  static defaultProps = {
    locale: 'zh',
  }

  render() {
    const { locale } = this.props;
    return (
      <IntlProvider
        key={locale}
        locale={locale}
        messages={localeData[locale]}
      >
        {React.Children.only(this.props.children)}
      </IntlProvider>
    );
  }
}

export default LocaleProvider;