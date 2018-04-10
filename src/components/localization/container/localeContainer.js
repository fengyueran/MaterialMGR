import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { localeSelector } from '../selectors';
import LocaleProvider from '../stateless/locale';
import { changeLocale } from '../reducer/localeState';


const mapStateToProps = createStructuredSelector({
  locale: localeSelector(),
});

const LocaleProviderContainer = connect(
  mapStateToProps,
  { changeLocale }
)(LocaleProvider);

export default LocaleProviderContainer;