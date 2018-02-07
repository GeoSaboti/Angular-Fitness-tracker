import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {environment} from '../environments/environment';
// === Routing Module ===
import {Routes} from '@angular/router';
import {AppRoutingModule, routeableComponents} from './app-routing';
import {AuthGuard} from './auth/auth.guard';

//  === Components ==
import { AppComponent } from './app.component';
import {MAT_DATE_LOCALE} from '@angular/material';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
// === Services ===
import {AuthService} from './auth/auth.service';
import {TrainingService} from './training/training.service';
import {UIService} from './shared/ui.service';
import {AngularFireModule} from 'angularfire2';
import {WelcomeComponent} from './training/welcome/welcome.component';
import {AuthModule} from './auth/auth.module';
import {AngularFirestoreModule} from 'angularfire2/firestore';


@NgModule({
  declarations: [
    AppComponent,
    //  Routeable Components
    // routeableComponents,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // Angular Material Module,
    MaterialModule,
    //  Routing
    AppRoutingModule,
    //  Flex layout module
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AuthModule,
    AngularFirestoreModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    TrainingService,
    UIService,
    {provide: MAT_DATE_LOCALE, useValue: 'es-CO'}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
