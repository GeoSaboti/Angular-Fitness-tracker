import {Component, OnInit} from '@angular/core';
import {TrainingService} from '../training.service';
import {Excercise} from '../excercise.model';
import {NgForm} from '@angular/forms';

import {Store} from '@ngrx/store';
import * as fromTraining from '../training.reducer';
import {Observable} from 'rxjs/Observable';
import * as Training from '../training.actions';
import * as fromRoot from '../../app.reducer';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {

  excercises$: Observable<Excercise[]>;

  isLoading$: Observable<boolean>;

  constructor(
    private trainingService: TrainingService,
    private store: Store<fromTraining.State>
  ) {
  }

  ngOnInit() {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    this.excercises$ = this.store.select(fromTraining.getAvailableExercises);
    this.fetchExercises();
  }

  fetchExercises(): void {
    this.trainingService.fetchAvailableExcercises();
  }

  onStartTraining(form: NgForm): void {
    this.trainingService.startExcercise(form.value.excercise);
  }

}
