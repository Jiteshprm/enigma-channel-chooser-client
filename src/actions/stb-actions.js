import * as types from '../actions/action-types';

export function getAllPhasesSuccess(phases) {
  return {
    type: types.GET_ALL_PHASES,
    phases
  };
}

export function getAllBouquetsSuccess(bouquetList) {
    return {
        type: types.GET_ALL_BOUQUETS,
        bouquetList
    };
}

export function getAllChannelsSuccess(bouquetList) {
    return {
        type: types.GET_ALL_CHANNELS,
        channelList
    };
}