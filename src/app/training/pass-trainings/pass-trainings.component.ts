import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Excercise} from '../excercise.model';
import {TrainingService} from '../training.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-pass-trainings',
  templateUrl: './pass-trainings.component.html',
  styleUrls: ['./pass-trainings.component.scss']
})
export class PassTrainingsComponent implements OnInit, AfterViewInit, OnDestroy {

  displayedColumns: string[];
  dataSource: any = new MatTableDataSource<Excercise>();
  private exChangeSubscription: Subscription;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private trainingService: TrainingService
  ) {
    this.displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];
  }

  ngOnInit() {
    this.exChangeSubscription = this.trainingService.finishedExcercisesChange.subscribe((excercises: Excercise[]) => {
      this.dataSource.data = excercises;
    });
    this.trainingService.fetchCompletedOrCancelledExercises();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy(): void {
    this.exChangeSubscription.unsubscribe();
  }

}
