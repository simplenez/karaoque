import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {getPassword, State} from '../reducers';
import {first} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VlcService {

  private httpGetOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true
  };

  constructor(private store: Store<State>, private httpClient: HttpClient) {
    this.store.select(getPassword).pipe(
      first(password => password !== undefined)
    ).subscribe(password => {
      if (!!password) {
        this.httpGetOptions.headers[`Authorization`] = 'Basic ' + btoa(':' + password);
      }
    });
  }

  fetchStatus(): Observable<any> {
    const url = '/requests/status.json';
    console.log('httpOpt', this.httpGetOptions);
    return this.httpClient.get<any>(url, this.httpGetOptions);
  }
}
