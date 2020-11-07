import {Injectable} from '@angular/core';
import {ConnectionInfo} from '../model/ConnectionInfo';
import {Observable, of} from 'rxjs';
import {ConnectionState} from '../reducers/connection.reducer';

@Injectable({
  providedIn: 'root'
})
export class VlcService {

  constructor() {
  }

  testConnection(connectionInfo: ConnectionInfo): Observable<ConnectionState> {
    const success = true;
    const connState: ConnectionState = {valid: success, connectionInfo};
    return of(connState);
  }
}
