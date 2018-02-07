import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// === Routeable Components ===
import {WelcomeComponent} from './training/welcome/welcome.component';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
  {path: 'training', loadChildren: './training/training.module#TrainingModule', canLoad: [AuthGuard]},
  {path: '', component: WelcomeComponent}
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
  WelcomeComponent
];
