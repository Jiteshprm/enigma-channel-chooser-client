import * as types from '../actions/action-types';

export function getAllPhasesSuccess(phases) {
  return {
    type: types.GET_ALL_PHASES,
    phases
  };
}

export function deleteUserSuccess(userId) {
  return {
    type: types.DELETE_USER_SUCCESS,
    userId
  };
}

export function userProfileSuccess(userProfile) {
  return {
    type: types.USER_PROFILE_SUCCESS,
    userProfile
  };
}
