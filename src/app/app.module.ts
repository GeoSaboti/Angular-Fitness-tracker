import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

// === Routing Module ===
import {AppRoutingModule, routeableComponents} from './app-routing';

//  === Components ===
import { AppComponent } from './app.component';
import { TrainingComponent } from './training/training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { PassTrainingsComponent } from './training/pass-trainings/pass-trainings.component';
import {MAT_DATE_LOCALE} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PassTrainingsComponent,
    //  Routeable Components
    routeableComponents
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
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'es-CO'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
