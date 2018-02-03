import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { StopTrainingComponent} from './stop-training.component';
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit {

  @Output() trainingExit: EventEmitter<any> = new EventEmitter<any>();
  private timer: any;
  public progress: number;

  constructor(
    public dialog: MatDialog
  ) {
    this.progress = 0;
  }


  ngOnInit() {
    this.startOrResumeTimer();
  }

  private startOrResumeTimer(): void {
    this.timer = setInterval(() => {
      this.progress = this.progress + 5;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 1000);
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
        this.trainingExit.emit();
      } else {
        this.startOrResumeTimer();
      }
    });
  }

}
