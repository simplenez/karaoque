import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {getPassword, State} from '../reducers';
import {Observable} from 'rxjs';
import {UrlUtil} from '../utils/url-util';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  url: string;
  password$: Observable<string>;

  constructor(private store: Store<State>) {

  }

  ngOnInit(): void {
    this.password$ = this.store.select(getPassword);
    this.url = UrlUtil.getOrigin();
  }

  saveConnection(): void {

  }

}
