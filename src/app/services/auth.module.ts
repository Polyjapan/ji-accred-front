import {NgModule} from '@angular/core';
import {AuthService} from './auth.service';


export function tokenGetter() {
  return localStorage.getItem('id_token');
}

export class UserSession {
  userId: number;
  email: string;
  isApp: boolean;
  groups: string[];
}

@NgModule({
  providers: [
    AuthService,
  ]
})
export class AuthModule {
}
