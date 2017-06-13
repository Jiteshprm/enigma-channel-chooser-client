import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
    current_phase: -1,
  phases: [],
    bouquets: []
};

const stbListReducer = function(state = initialState, action) {
 console.log("state1", state)
  switch(action.type) {

      case types.GET_ALL_PHASES:
            return Object.assign({}, state, { phases: action.phases, current_phase:0 });

      case types.GET_ALL_BOUQUETS:
          return Object.assign({}, state, { bouquets: action.bouquetList, current_phase:1 });

  }

  return state;

}

export default stbListReducer;
