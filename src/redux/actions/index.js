import {createAction} from '@reduxjs/toolkit';
import * as actions from './actions';

//contacts action creator
export const addNameRequest = createAction(actions.ADD_REQUEST);
export const addNameSuccess = createAction(actions.ADD_SUCCESS);
export const addNameFailure = createAction(actions.ADD_FAILURE);

export const fetchNamesRequest = createAction(actions.FETCH_REQUEST);
export const fetchNamesSuccess = createAction(actions.FETCH_SUCCESS);
export const fetchNamesFailure = createAction(actions.FETCH_FAILURE);

export const deleteNameRequest = createAction(actions.DELETE_REQUEST);
export const deleteNameSuccess = createAction(actions.DELETE_SUCCESS);
export const deleteNameFailure = createAction(actions.DELETE_FAILURE);

export const changeFilter = createAction(actions.CHANGE_FILTER);

//theme action creator
export const toggleThemeRequest = createAction(actions.TOGGLE_THEME_REQUEST);
export const toggleThemeSuccess = createAction(actions.TOGGLE_THEME_SUCCESS);
export const toggleThemeFailure = createAction(actions.TOGGLE_THEME_FAILURE);

//auth action creator 
export const logupRequest = createAction(actions.LOGUP_REQUEST);
export const logupSuccess = createAction(actions.LOGUP_SUCCESS);
export const logupFailure = createAction(actions.LOGUP_FAILURE);

export const loginRequest = createAction(actions.LOGIN_REQUEST);
export const loginSuccess = createAction(actions.LOGIN_SUCCESS);
export const loginFailure = createAction(actions.LOGIN_FAILURE);

export const logoutRequest = createAction(actions.LOGOUT_REQUEST);
export const logoutSuccess = createAction(actions.LOGOUT_SUCCESS);
export const logoutFailure = createAction(actions.LOGOUT_FAILURE);

export const getCurrentUserRequest = createAction(actions.CURRENT_USER_REQUEST);
export const getCurrentUserSuccess = createAction(actions.CURRENT_USER_SUCCESS);
export const getCurrentUserFailure = createAction(actions.CURRENT_USER_FAILURE);


