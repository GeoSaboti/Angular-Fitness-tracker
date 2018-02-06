import {Component, OnDestroy, OnInit} from '@angular/core';
import {TrainingService} from '../training.service';
import {Excercise} from '../excercise.model';
import {NgForm} from '@angular/forms';

import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit, OnDestroy {

  excercises: Excercise[];
  excerciseSubscription: Subscription
  constructor(
    private trainingService: TrainingService
  ) {
  }

  ngOnInit() {
    this.excerciseSubscription = this.trainingService.excercisesChange.subscribe((excercises => this.excercises = excercises));
    this.trainingService.fetchAvailableExcercises();
  }

  onStartTraining(form: NgForm): void {
    this.trainingService.startExcercise(form.value.excercise);
  }

  ngOnDestroy() {
    this.excerciseSubscription.unsubscribe();
  }

}
