import axios from 'axios';
import React, { FC, PropsWithChildren, useContext, useReducer } from 'react';
import { BASE_URL, GENERIC_ERROR_MESSAGE } from '../app-constants';
import { IGithub } from '../models';
import {
  getUserDetailAction,
  getUserDetailErrorAction,
  getUserDetailSuccessAction,
  clearUserDetailAction,
  searchUsernameAction,
} from './actions';
import { ActionsContext, CONTEXT_INITIAL_STATE, StateContext } from './contexts';
import { authReducer } from './reducer';

const GithubProvider: FC<PropsWithChildren<any>> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, CONTEXT_INITIAL_STATE);

  const getUserDetail = (callback: () => void) => {
    dispatch(getUserDetailAction());

    if (!!state?.username) {
      axios
        .get<IGithub>(`${BASE_URL}/users/${state?.username}`)
        .then(({ status, data }) => {
          if (status === 200) {
            dispatch(getUserDetailSuccessAction(data));

            if (callback) callback();
          }
        })
        .catch((e) => dispatch(getUserDetailErrorAction(e?.response?.data?.message || GENERIC_ERROR_MESSAGE)));
    } else {
      dispatch(clearUserDetailAction());
    }
  };

  const clearUserDetails = () => dispatch(clearUserDetailAction());

  const searchUsername = (username: string) => {
    dispatch(searchUsernameAction(username));
  };

  return (
    <StateContext.Provider value={state}>
      <ActionsContext.Provider value={{ getUserDetail, searchUsername, clearUserDetails }}>
        {children}
      </ActionsContext.Provider>
    </StateContext.Provider>
  );
};

function useGithubState() {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error('useGithubState must be used within a GithubProvider');
  }
  return context;
}

function useGithubActions() {
  const context = useContext(ActionsContext);
  if (context === undefined) {
    throw new Error('useGithubActions must be used within a GithubProvider');
  }
  return context;
}

function useGithubContext() {
  return { ...useGithubActions(), ...useGithubState() };
}

export { GithubProvider, useGithubState, useGithubActions, useGithubContext };
