import {createReducer, on} from '@ngrx/store';
import {saveConnectionInfoSuccessAction} from '../actions/connection.action';
import {ConnectionInfo} from '../model/ConnectionInfo';

export interface ConnectionState {
  valid: boolean;
  connectionInfo: ConnectionInfo;
}

export const initialState: ConnectionState = {
  valid: false,
  connectionInfo: {
    ip: 'localhost',
    port: 4200,
    password: 'password'
  }
};

export const connectionReducers = createReducer(
  initialState,
  on(saveConnectionInfoSuccessAction, saveConnectionInfoSuccessReducer)
);

function saveConnectionInfoSuccessReducer(state: ConnectionState, action): ConnectionState {
  return {
    valid: action.valid,
    connectionInfo: action.connectionInfo
  };
}

export class ConnectionSelectors {
  static isValid = (state: ConnectionState) => state.valid;
  static getConnectionInfo = (state: ConnectionState) => state.connectionInfo;
}

