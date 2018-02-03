import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  onGoingTraining: boolean;
  constructor() {
    this.onGoingTraining = false;
  }

  ngOnInit() {
  }

}
