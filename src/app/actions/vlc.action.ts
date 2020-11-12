import {createAction, props} from '@ngrx/store';
import {stringify} from 'querystring';

const prefix = '[VLC] ';

export const fetchStatusAction = createAction(
  prefix + 'Fetch status'
);

export const fetchStatusSuccessAction = createAction(
  prefix + 'Fetch status success',
  props<{ status: any }>()
);

export const savePasswordAction = createAction(
  prefix + 'Save password',
  props<{ password: string }>()
);

export const redirectAction = createAction(
  prefix + 'Redirect',
  props<{ path: string }>()
);



