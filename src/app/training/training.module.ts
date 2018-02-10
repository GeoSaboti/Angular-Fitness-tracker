import {NgModule} from '@angular/core';

import {TrainingComponent} from './training.component';
import {NewTrainingComponent} from './new-training/new-training.component';
import {PassTrainingsComponent} from './pass-trainings/pass-trainings.component';
import {CurrentTrainingComponent} from './current-training/current-training.component';
import {StopTrainingComponent} from './current-training/stop-training.component';
import {SharedModule} from '../shared/shared.module';
import {TrainingRoutingModule} from './training-routing.module';
import { StoreModule } from '@ngrx/store';
import {trainingReducer} from './training.reducer';

@NgModule({
  imports: [
    SharedModule,
    TrainingRoutingModule,
    StoreModule.forFeature('training', trainingReducer)
  ],
  exports: [],
  declarations: [TrainingComponent, NewTrainingComponent, PassTrainingsComponent, CurrentTrainingComponent, StopTrainingComponent],
  providers: [],
  entryComponents: [StopTrainingComponent]

})
export class TrainingModule {
}