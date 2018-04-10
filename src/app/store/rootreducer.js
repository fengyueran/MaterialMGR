import { combineReducers } from 'redux-immutable';
import { localeState } from '../../components/localization';
import { vMState } from '../../reducers/vmreducer';


const reducers = {
  vMState,
  localeState,
};

const rootReducer = combineReducers(reducers);

export { reducers, rootReducer };
