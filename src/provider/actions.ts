import { createAction } from 'redux-actions';
import { IGithub } from '../models';
import { IStateContext } from './contexts';

export enum ActionEnums {
  GetUserDetailRequest = 'GET_USER_DETAIL_REQUEST',
  GetUserDetailSuccess = 'GET_USER_DETAIL_SUCCESS',
  GetUserDetailError = 'GET_USER_DETAIL_ERROR',
  SearchUsername = 'SEARCH_USERNAME_ACTION',
}
//#region GetUserDetails
export const getUserDetailAction = createAction<IStateContext>(ActionEnums.GetUserDetailRequest, () => ({
  loadingFlag: true,
  successFlag: false,
  errorFlag: false,
}));

export const getUserDetailSuccessAction = createAction<IStateContext, IGithub>(
  ActionEnums.GetUserDetailSuccess,
  (userDetail) => ({ userDetail, loadingFlag: false, successFlag: true, errorFlag: false })
);

export const getUserDetailErrorAction = createAction<IStateContext, any>(ActionEnums.GetUserDetailError, (error) => ({
  error,
  loadingFlag: false,
  successFlag: false,
  errorFlag: true,
}));
//#endregion

//#region GetUserDetails
export const searchUsernameAction = createAction<IStateContext, string>(ActionEnums.SearchUsername, (username) => ({
  username,
}));
//#endregion

/* NEW_ACTION_GOES_HERE */
