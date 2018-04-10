import { fromJS } from 'immutable';

const CHANGE_LOCALE = 'CHANGE_LOCALE';
const changeLocaleAction = (locale) => ({ type: CHANGE_LOCALE, locale });

const changeLocale = (locale) =>
  dispatch => {
    dispatch(changeLocaleAction(locale));
  };


const initialState = fromJS({
  locale: 'zh',
});

const localeState = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LOCALE:
      return state.set('locale', action.locale);
    default:
      return state;
  }
};

export { localeState, changeLocale };
