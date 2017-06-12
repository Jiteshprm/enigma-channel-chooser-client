import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  phases: [],
    stblist: []
};

const stbListReducer = function(state = initialState, action) {
 console.log("state1", state)
  switch(action.type) {

    case types.GET_ALL_PHASES:
      return Object.assign({}, state, { phases: action.phases });

  }

  return state;

}

export default stbListReducer;
