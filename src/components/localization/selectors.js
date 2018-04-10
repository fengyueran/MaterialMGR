import { createSelector } from 'reselect';

const localeStateSelector = (state) => state.get('localeState');

const localeSelector = () => createSelector(
  localeStateSelector,
  (localeState) => localeState.get('locale')
);

export { localeSelector };