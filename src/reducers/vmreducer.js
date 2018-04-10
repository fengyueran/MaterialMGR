
import { fromJS } from 'immutable';

const UPDATE_VM = "UPDATE_VM";
const updateVMAction = (key, value) =>
  ({ type: UPDATE_VM, key, value });

const updateVM = (key, value) =>
  dispatch => {
    dispatch(updateVMAction(key, value));
  };

const initialState = fromJS({});

const vMState = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_VM:
    {
      return state.set(action.key, action.value);
    }
    default:
    {
      return state;
    }
  }
};

export { vMState, updateVM };