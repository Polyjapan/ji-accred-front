import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {
  private _loginUrl = environment.apiurl + '/login';

  constructor(private http: HttpClient) {
  }

  login(ticket: string): Observable<LoginResponse> {
    return this.http
      .get<LoginResponse>(this._loginUrl + '/' + ticket);
  }
}

export class LoginResponse {
  session: string;
}
