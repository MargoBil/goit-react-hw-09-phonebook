import { combineReducers } from "redux";

import { items, filter } from "./contactsReducer";
import { themeColor } from "./themeReducer";
import { user, token, error } from "./authReducer";

export const contactsReducer = combineReducers({
  items,
  filter,
});

export const themeReducer = combineReducers({
  themeColor,
});

export const authReducer = combineReducers({
  user,
  token,
  error,
});
