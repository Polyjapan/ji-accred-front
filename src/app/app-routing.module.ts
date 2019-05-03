import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {PermissionAuthGuard} from './services/permission-auth-guard.service';
import {NgModule} from '@angular/core';
import {RequireLoginComponent} from './components/require-login/require-login.component';
import {LoginFailedComponent} from './components/login-failed/login-failed.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    canActivate: [PermissionAuthGuard]
  },

  { path: 'require-login', component: RequireLoginComponent },
  { path: 'login-failed', component: LoginFailedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
