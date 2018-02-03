import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {

  @Output() trainingStar: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onStartTraining(): void {
    this.trainingStar.emit();
  }

}
