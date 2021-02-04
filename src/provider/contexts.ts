import { createContext } from 'react';
import { IGithub } from '../models';

export interface IStateContext {
  readonly userDetail?: IGithub;
  readonly loadingFlag?: boolean;
  readonly successFlag?: boolean;
  readonly errorFlag?: boolean;
  readonly error?: any;
  readonly username?: string;
}

export interface IActionsContext {
  getUserDetail: (callback?: () => void) => void;
  clearUserDetails: () => void;
  searchUsername: (username: string) => void;
}

export const CONTEXT_INITIAL_STATE: IStateContext = {
  loadingFlag: false,
  successFlag: false,
  errorFlag: false,
  username: '',
};

export const StateContext = createContext<IStateContext>(CONTEXT_INITIAL_STATE);

export const ActionsContext = createContext<IActionsContext>(undefined);
