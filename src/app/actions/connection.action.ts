import {createAction, props} from '@ngrx/store';
import {ConnectionInfo} from '../model/ConnectionInfo';
import {ConnectionState} from '../reducers/connection.reducer';

const prefix = '[Connection] ';

export const initConnectionInfoAction = createAction(
  prefix + 'Init connection info',
  props<{ connectionInfo: ConnectionInfo }>()
);

export const saveConnectionInfoAction = createAction(
  prefix + 'Save connection info',
  props<{ connectionInfo: ConnectionInfo }>()
);

export const saveConnectionInfoSuccessAction = createAction(
  prefix + 'Save connection info success',
  props<{ connectionState: ConnectionState }>()
);
