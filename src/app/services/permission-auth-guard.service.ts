import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';

@Injectable()
export class PermissionAuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedGroup = route.data.group;

    if (!expectedGroup) {
      // If we don't require a perm, it means we only want the user to be logged in
      return this.authService.requiresLogin(state.url);
    } else {
      const ok = this.authService.hasGroup(expectedGroup);

      if (!ok) {
        this.router.navigate(['/']);
      }

      return ok;
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }
}
