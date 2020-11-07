import {ActionReducerMap, createSelector} from '@ngrx/store';
import {connectionReducers, ConnectionSelectors, ConnectionState} from './connection.reducer';

export interface State {
  connectionState: ConnectionState;
}

export const reducers: ActionReducerMap<State> = {
  connectionState: connectionReducers
};

export const getConnectionState = (state: State) => state.connectionState;
export const isConnectionValid = createSelector(getConnectionState, ConnectionSelectors.isValid);
export const getConnectionInfo = createSelector(getConnectionState, ConnectionSelectors.getConnectionInfo);

