import {ActionReducerMap, createSelector} from '@ngrx/store';
import {vlcReducers, VlcSelectors, VlcState} from './vlc.reducer';

export interface State {
  vlcState: VlcState;
}

export const reducers: ActionReducerMap<State> = {
  vlcState: vlcReducers
};

export const getVlcState = (state: State) => state.vlcState;
export const getPassword = createSelector(getVlcState, VlcSelectors.getPassword);
export const getVlcStatus = createSelector(getVlcState, VlcSelectors.getStatus);
