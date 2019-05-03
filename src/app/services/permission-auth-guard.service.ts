import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {LoginService} from './login.service';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/catch';
import {Observable} from 'rxjs/Rx';

@Injectable({
  providedIn: 'root',
})
export class PermissionAuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService,
              private loginService: LoginService,
              private router: Router) {}

  private tryLogin(ticket?: string): Observable<UrlTree> | UrlTree {
    if (ticket) {
      return this.loginService
        .login(ticket)
        .map(success => {
          return this.authService.login(success.session);
        })
        .catch(err => Observable.of(this.router.createUrlTree(['login-failed'])));
    } else {
      return this.router.createUrlTree(['require-login']);
    }
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UrlTree | boolean> | UrlTree | boolean {
    const expectedGroup = route.data.group;

    const ticket = route.queryParamMap.get('ticket');

    if (!expectedGroup) {
      // If we don't require a perm, it means we only want the user to be logged in
      if (!this.authService.requiresLogin(state.url)) {
        return this.tryLogin(ticket);
      }
      return true;
    } else {
      const ok = this.authService.requiresGroup(state.url, expectedGroup);

      if (!ok) {
        if (this.authService.isAuthenticated()) {
          return this.router.createUrlTree(['/']);
        } else {
          return this.tryLogin(ticket);
        }
      }

      return ok;
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(route, state);
  }
}
