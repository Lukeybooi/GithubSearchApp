import { IStateContext } from './contexts';
import { ActionEnums } from './actions';

export function authReducer(state: IStateContext, action: ReduxActions.Action<IStateContext>): IStateContext {
  const { type, payload } = action;
  //#endregion

  switch (type) {
    case ActionEnums.GetUserDetailRequest:
    case ActionEnums.GetUserDetailSuccess:
    case ActionEnums.GetUserDetailError:
    case ActionEnums.SearchUsername:
      return {
        ...state,
        ...payload,
      };

    default: {
      return state;
    }
  }
}
