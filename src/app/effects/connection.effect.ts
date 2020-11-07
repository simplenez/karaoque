import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {initConnectionInfoAction, saveConnectionInfoAction, saveConnectionInfoSuccessAction} from '../actions/connection.action';
import {EMPTY, Observable} from 'rxjs';
import {VlcService} from '../services/vlc.service';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {ConnectionInfo} from '../model/ConnectionInfo';
import {ConnectionState} from '../reducers/connection.reducer';
import {TypedAction} from '@ngrx/store/src/models';
import {Router} from '@angular/router';

@Injectable()
export class ConnectionEffect {

  constructor(private allActions$: Actions, private vlcService: VlcService, private router: Router) {
  }

  initConnectionInfo$ = createEffect(() =>
    this.allActions$.pipe(
      ofType(initConnectionInfoAction),
      mergeMap((action) => this.vlcService.testConnection(action.connectionInfo).pipe(
        map(res => {
          console.log('connection initialized: ', res);
          if (!!res.valid) {
            this.router.navigate(['/status']);
          } else {
            this.router.navigate(['/home']);
          }
          return saveConnectionInfoSuccessAction({connectionState: res});
        }),
        catchError((err) => {
          console.log('error', err);
          return EMPTY;
        })
      ))
    )
  );

  /* Writing effects like above on a clean file will be hard due to not having proper imports, making it very hard to debug.
  Below is an alternate way of writing the effect above that will be easier to help with importing the different methods.
  Recommend writing like blow first, then do the above.
 */

  saveConnectionInfo$ = createEffect(() =>
    this.allActions$.pipe(
      ofType(saveConnectionInfoAction),
      mergeMap((action) => this.testConnection(action.connectionInfo))
    )
  );

  testConnection(connectionInfo: ConnectionInfo): Observable<{ connectionState: ConnectionState } & TypedAction<string>> {
    return this.vlcService.testConnection(connectionInfo).pipe(
      map(connectionState => saveConnectionInfoSuccessAction({connectionState})),
      catchError((err) => {
        console.log('error', err);
        return EMPTY;
      })
    );
  }

}
