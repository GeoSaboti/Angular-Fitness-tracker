import {Component, OnInit} from '@angular/core';
import { StopTrainingComponent} from './stop-training.component';
import {MatDialog, MatDialogRef} from '@angular/material';
import {TrainingService} from '../training.service';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit {

  private timer: any;
  public progress: number;

  constructor(
    private trainingService: TrainingService,
    public dialog: MatDialog
  ) {
    this.progress = 0;
  }


  ngOnInit() {
    this.startOrResumeTimer();
  }

  private startOrResumeTimer(): void {
    const step: number = this.trainingService.getRunningExcercise().duration / 100 * 1000;
    this.timer = setInterval(() => {
      this.progress = this.progress + 5;
      if (this.progress >= 100) {
        this.trainingService.completeExcercise();
        clearInterval(this.timer);
      }
    }, step);
  }

  public stop(): void {
    clearInterval(this.timer);
    const dialogRef: MatDialogRef<StopTrainingComponent> = this.dialog.open(StopTrainingComponent, {
      data: {
      progress: this.progress
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.trainingService.cancelExcercise(this.progress);
      } else {
        this.startOrResumeTimer();
      }
    });
  }

}
