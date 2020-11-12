import {Component, OnInit} from '@angular/core';
import {getVlcStatus, State} from '../reducers';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styles: []
})
export class StatusComponent implements OnInit {
  constructor(private store: Store<State>) {
  }

  vlcStatus$: Observable<any>;

  ngOnInit(): void {
    this.vlcStatus$ = this.store.select(getVlcStatus);
  }

}
