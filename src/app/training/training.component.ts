import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {TrainingService} from './training.service';
import {Excercise} from './excercise.model';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  onGoingTraining: boolean;
  excerciseSubscription: Subscription;
  constructor(
    private triningService: TrainingService
  ) {
    this.onGoingTraining = false;
  }

  ngOnInit() {
    this.excerciseSubscription = this.triningService.excerciseChange.subscribe((excercise: Excercise) => {
      if (excercise) {
        this.onGoingTraining = true;
      } else {
        this.onGoingTraining = false;
      }
    });
  }

}
