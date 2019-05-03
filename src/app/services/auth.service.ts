import {Injectable, Optional} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {BackendService} from './backend.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {UserSession} from './auth.module';

@Injectable()
export class AuthService {

  constructor(private backend: BackendService, private jwtHelper: JwtHelperService, private route: Router) {
  }

  login(token: string) {
    localStorage.setItem('id_token', token);
    let act = this.loadNextAction();

    if (!act) {
      act = '/';
    }

    this.route.navigate([act]);
  }

  requiresLogin(redirectTo: string): boolean {
    if (this.isAuthenticated()) {
      return true;
    } else {
      this.storeNextAction(redirectTo);
      this.route.navigateByUrl(environment.auth.apiurl + '/login?app=' + environment.auth.clientId);

      return false;
    }
  }

  private storeNextAction(action: string) {
    localStorage.setItem('_post_login_action', action);
  }

  private loadNextAction(): string {
    const act = localStorage.getItem('_post_login_action');
    localStorage.removeItem('_post_login_action');

    return act;
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('id_token');
  }

  public getToken(): UserSession {
    const token = localStorage.getItem('id_token');
    const decoded = this.jwtHelper.decodeToken(token);

    if (decoded && decoded.user) {
      return decoded.user as UserSession;
    } else {
      return null;
    }
  }

  public hasGroup(group: string): boolean {
    const token = this.getToken();
    if (this.isAuthenticated() && token && token.user && token.user.groups) {
      const groups: string[] = token.user.groups;

      return groups.indexOf(group) !== -1;
    } else {
      return false;
    }
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('id_token');
    if (token === null) {
      return false;
    }

    try {
      return !this.jwtHelper.isTokenExpired(token);
    } catch (e) {
      return false;
    }
  }
}
