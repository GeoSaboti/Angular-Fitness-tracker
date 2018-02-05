import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Excercise} from '../excercise.model';
import {TrainingService} from '../training.service';

@Component({
  selector: 'app-pass-trainings',
  templateUrl: './pass-trainings.component.html',
  styleUrls: ['./pass-trainings.component.scss']
})
export class PassTrainingsComponent implements OnInit, AfterViewInit {

  displayedColumns: string[];
  dataSource: any = new MatTableDataSource<Excercise>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private trainingService: TrainingService
  ) {
    this.displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];
  }

  ngOnInit() {
    this.dataSource.data = this.trainingService.getCompletedOrCancelledExercises();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
