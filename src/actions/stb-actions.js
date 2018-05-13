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

export function getAllChannelsSuccess(channelList) {
    return {
        type: types.GET_ALL_CHANNELS,
        channelList
    };
}

export function selectChannelSuccess(channelSelectSuccess) {
    return {
        type: types.CHOOSE_CHANNEL,
        channelSelectSuccess
    };
}

export function runChannelSuccess(runChannelSuccess) {
    return {
        type: types.RUN_CHANNEL,
        runChannelSuccess
    };
}