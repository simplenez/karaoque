import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {getVlcStatus, State} from '../reducers';
import {fetchStatusAction, redirectAction, savePasswordAction} from '../actions/vlc.action';
import {Observable} from 'rxjs';
import {UrlUtil} from '../utils/url-util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Karaoque';
  status$: Observable<any>;

  constructor(private store: Store<State>, private router: Router) {
    this.status$ = this.store.select(getVlcStatus);
  }

  ngOnInit(): void {
    console.log('App component');
    const query = UrlUtil.getUrlQuery();
    if (!!query.password) {
      this.store.dispatch(savePasswordAction({password: query.password}));
    }
    this.store.dispatch(fetchStatusAction());
    const redirectPath = !!query.redirect ? query.redirect : '/home';
    this.store.dispatch(redirectAction({path: redirectPath}));
  }

}
