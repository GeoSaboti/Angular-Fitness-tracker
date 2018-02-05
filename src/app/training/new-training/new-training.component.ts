import {Component, OnInit} from '@angular/core';
import {TrainingService} from '../training.service';
import {Excercise} from '../excercise.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {

  excercises: Excercise[];
  constructor(
    private trainingService: TrainingService
  ) {
  }

  ngOnInit() {
    this.excercises = this.trainingService.getAvailableExcercises();
  }

  onStartTraining(form: NgForm): void {
    this.trainingService.startExcercise(form.value.excercise);
  }

}
