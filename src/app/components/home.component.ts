import {Component, OnInit} from '@angular/core';
import {ConnectionInfo} from '../model/ConnectionInfo';
import {Store} from '@ngrx/store';
import {State} from '../reducers';
import {saveConnectionInfoAction} from '../actions/connection.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  connectionInfo: ConnectionInfo;

  constructor(private store: Store<State>) {

  }

  ngOnInit(): void {
  }

  saveConnection(): void {
    this.store.dispatch(saveConnectionInfoAction({connectionInfo: this.connectionInfo}));
  }

}
