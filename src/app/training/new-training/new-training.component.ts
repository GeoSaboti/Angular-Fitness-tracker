import {Component, OnDestroy, OnInit} from '@angular/core';
import {TrainingService} from '../training.service';
import {Excercise} from '../excercise.model';
import {NgForm} from '@angular/forms';
import {UIService} from '../../shared/ui.service';

import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit, OnDestroy {

  excercises: Excercise[];
  excerciseSubscription: Subscription;

  isLoading: boolean;
  private loadingSubs: Subscription;

  constructor(
    private trainingService: TrainingService,
    private uiService: UIService
  ) {
    this.isLoading = true;
  }

  ngOnInit() {
    this.loadingSubs = this.uiService.loadingStateChanged.subscribe((isLoading: boolean) => {
      this.isLoading = isLoading;
    });
    this.excerciseSubscription = this.trainingService.excercisesChange.subscribe((excercises => this.excercises = excercises));
    this.fetchExercises();
  }

  fetchExercises(): void {
    this.trainingService.fetchAvailableExcercises();
  }

  onStartTraining(form: NgForm): void {
    this.trainingService.startExcercise(form.value.excercise);
  }

  ngOnDestroy() {
    if (this.loadingSubs) {
      this.loadingSubs.unsubscribe();
    }
    if (this.excerciseSubscription) {
      this.excerciseSubscription.unsubscribe();
    }
  }

}
