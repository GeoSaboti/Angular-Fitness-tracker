import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// === Routeable Components ===
import {WelcomeComponent} from './training/welcome/welcome.component';
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import {TrainingComponent} from './training/training.component';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'training', component: TrainingComponent, canActivate: [AuthGuard]},
  {path: '', component: WelcomeComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuard]
})
export class AppRoutingModule {}

export const routeableComponents = [
  WelcomeComponent,
  SignupComponent,
  LoginComponent,
  TrainingComponent
];
