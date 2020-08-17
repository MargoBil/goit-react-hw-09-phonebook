import { createReducer } from '@reduxjs/toolkit';

import * as actions from '../actions';

const INITIAL_USER_STATE = { name: null, email: null};

export const user = createReducer(INITIAL_USER_STATE, {
    [actions.logupSuccess]: (_, {payload}) => payload.user,
    [actions.loginSuccess]: (_, {payload}) => payload.user,
    [actions.logoutSuccess]: () => INITIAL_USER_STATE
})
export const token = createReducer(null, {
    [actions.logupSuccess]: (_, {payload}) => payload.token,
    [actions.loginSuccess]: (_, {payload}) => payload.token,
    [actions.logoutSuccess]: () => null
})
export const error = createReducer(null, {
    [actions.logupFailure]: (_, {payload}) => payload,
    [actions.loginFailure]: (_, {payload}) => payload,
    [actions.logoutFailure]: (_, {payload}) => payload,
})
export const getCurrentUser = createReducer(null, {
    [actions.getCurrentUserRequest]: (_, {payload}) => payload.token,
    [actions.getCurrentUserSuccess]: (_, {payload}) => payload.token,
    [actions.getCurrentUserFailure]: () => null
})
