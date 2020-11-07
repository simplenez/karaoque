import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {isConnectionValid, State} from '../reducers';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {UrlUtil} from '../utils/url-util';
import {initConnectionInfoAction} from '../actions/connection.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Karaoque';
  private ngDestroy$ = new Subject();

  constructor(private store: Store<State>, private router: Router) {
  }

  ngOnInit(): void {
    const query = UrlUtil.getUrlQuery();
    if (!!query.ip && !!query.port && !!query.password) {
      const connInfo = {ip: query.ip, port: query.port, password: query.password};
      console.log('connection status: ', connInfo);
      this.store.dispatch(initConnectionInfoAction({connectionInfo: connInfo}));
    } else {
      this.store.pipe(
        select(isConnectionValid),
        takeUntil(this.ngDestroy$)
      ).subscribe(valid => {
        console.log('connection status: ', valid);
        if (!!valid) {
          this.router.navigate(['/status']);
        } else {
          this.router.navigate(['/home']);
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.ngDestroy$.next();
  }

}
