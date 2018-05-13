import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
    current_phase: -1,
  phases: [],
    bouquets: [],
    services: [],
    channel: [],
    run: [],
    current_channel_name: [],
    current_channel_reference: [],
    current_bouquet_reference: [],
    current_bouquet_name: [],
};

const stbListReducer = function(state = initialState, action) {
 console.log("state1", state)
  switch(action.type) {

      case types.GET_ALL_PHASES:
            return Object.assign({}, state, { phases: action.phases, current_phase:0 });

      case types.GET_ALL_BOUQUETS:
          return Object.assign({}, state, { bouquets: action.bouquetList, current_phase:1 });

      case types.GET_ALL_CHANNELS:
          return Object.assign({}, state, { services: action.channelList.payload,current_bouquet_reference:action.channelList.service_reference, current_bouquet_name:action.channelList.service_name , current_phase:2 });

      case types.CHOOSE_CHANNEL:
          return Object.assign({}, state, { channel: action.channelSelectSuccess, current_phase:3 });

      case types.RUN_CHANNEL:
          return Object.assign({}, state, { run: action.runChannelSuccess, current_phase:4 });
  }

  return state;

}

export default stbListReducer;
