import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// === Routeable Components ===
import {WelcomeComponent} from './training/welcome/welcome.component';
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

export const routeableComponents = [
  WelcomeComponent,
  SignupComponent,
  LoginComponent
];