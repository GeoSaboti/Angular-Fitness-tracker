import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';

// === Routing Module ===
import {AppRoutingModule, routeableComponents} from './app-routing';

//  === Components ===
import { AppComponent } from './app.component';
import { TrainingComponent } from './training/training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { PassTrainingsComponent } from './training/pass-trainings/pass-trainings.component';


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
    // Angular Material Module,
    MaterialModule,
    //  Routing
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
