import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

// === Routing Module ===
import {AppRoutingModule, routeableComponents} from './app-routing';

//  === Components ==
import { AppComponent } from './app.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { PassTrainingsComponent } from './training/pass-trainings/pass-trainings.component';
import {MAT_DATE_LOCALE} from '@angular/material';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { StopTrainingComponent } from './training/current-training/stop-training.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PassTrainingsComponent,
    //  Routeable Components
    routeableComponents,
    HeaderComponent,
    SidenavListComponent,
    StopTrainingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // Angular Material Module,
    MaterialModule,
    //  Routing
    AppRoutingModule,
    //  Flex layout module
    FlexLayoutModule

  ],
  entryComponents: [StopTrainingComponent],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'es-CO'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
