import {createReducer, on} from '@ngrx/store';
import {fetchStatusSuccessAction, savePasswordAction} from '../actions/vlc.action';

export interface VlcState {
  password: string;
  status: any;
}

export const initialState: VlcState = {
  password: undefined,
  status: undefined
};

export const vlcReducers = createReducer(
  initialState,
  on(savePasswordAction, savePasswordReducer),
  on(fetchStatusSuccessAction, fetchStatusSuccessReducer)
);

function savePasswordReducer(state: VlcState, action): VlcState {
  return {...state, password: action.password};
}

function fetchStatusSuccessReducer(state: VlcState, action): VlcState {
  return {...state, status: action.status};
}

export class VlcSelectors {
  static getPassword = (state: VlcState) => state.password;
  static getStatus = (state: VlcState) => state.status;
}

