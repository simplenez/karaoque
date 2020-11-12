import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {VlcService} from '../services/vlc.service';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {State} from '../reducers';
import {Store} from '@ngrx/store';
import {fetchStatusAction, fetchStatusSuccessAction, redirectAction} from '../actions/vlc.action';
import {EMPTY} from 'rxjs';

@Injectable()
export class VlcEffect {

  constructor(private allActions$: Actions, private store: Store<State>, private vlcService: VlcService, private router: Router) {
  }

  fetchStatus$ = createEffect(() => this.allActions$.pipe(
    ofType(fetchStatusAction),
    switchMap(action => this.vlcService.fetchStatus().pipe(
      map(res => fetchStatusSuccessAction({status: res})),
      catchError((error) => {
        console.log('Error', error);
        return EMPTY;
      }))
    ))
  );

  redirect$ = createEffect(() =>
    this.allActions$.pipe(
      ofType(redirectAction),
      tap(action => {
        return this.router.navigateByUrl(action.path);
      })
    ), {dispatch: false});
}
