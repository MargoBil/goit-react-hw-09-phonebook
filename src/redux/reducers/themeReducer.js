import {createReducer} from '@reduxjs/toolkit';

import * as actions from '../actions';

const onToggleTheme = (_, action) => action.payload;

export const themeColor = createReducer('Light', {
  [actions.toggleThemeSuccess]: onToggleTheme,
});
