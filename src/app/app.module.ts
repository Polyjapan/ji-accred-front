import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatProgressBarModule,
  MatExpansionModule,
  MatChipsModule, MatFormFieldModule, MatListModule, MatBadgeModule, MatIconModule
} from '@angular/material';
import {HomeComponent} from './components/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {JwtModule} from '@auth0/angular-jwt';
import {tokenGetter} from './services/auth.module';
import {RequireLoginComponent} from './components/require-login/require-login.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginService} from './services/login.service';
import { LoginFailedComponent } from './components/login-failed/login-failed.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { RequestStatePipe } from './pipes/request-state.pipe';
import {AccredStatePipe} from './pipes/accred-state.pipe';
import {RequestStateDescriptionPipe} from './pipes/request-state-description.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RequireLoginComponent,
    LoginFailedComponent,
    RequestStatePipe,
    RequestStateDescriptionPipe,
    AccredStatePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatChipsModule,
    MatFormFieldModule,
    MatListModule,
    MatBadgeModule,
    MatIconModule,
    HttpClientModule,
    FlexLayoutModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    }),

    AppRoutingModule,
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
