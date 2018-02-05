import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Excercise} from './excercise.model';

@Injectable()
export class TrainingService {

  excerciseChange: Subject<Excercise> = new Subject<Excercise>();
  private availableExcercises: Excercise[];
  private runingExcercise: Excercise;
  private excercices: Excercise[] = [];

  constructor() {
    this.availableExcercises = [
      {id: 'crunches', name: 'Crunches', duration: 30, calories: 8},
      {id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15},
      {id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18},
      {id: 'burpees', name: 'Burpees', duration: 60, calories: 8}
    ];
  }

  public getAvailableExcercises(): Excercise[] {
    // Return a real copy of the availableExcercises array
    return this.availableExcercises.slice();
  }

  public startExcercise(selectedId: string): void {
    this.runingExcercise = this.availableExcercises.find(excercise =>  excercise.id === selectedId);
    this.excerciseChange.next({...this.runingExcercise});
  }

  public completeExcercise(): void {
    this.excercices.push({
      ...this.runingExcercise,
      date: new Date(),
      state: 'completed'
    });
    this.runingExcercise = null;
    this.excerciseChange.next(null);
  }

  public cancelExcercise(progress: number): void {
    this.excercices.push({
      ...this.runingExcercise,
      duration: this.runingExcercise.duration * (progress / 100),
      calories: this.runingExcercise.calories * (progress / 100),
      date: new Date(),
      state: 'cancelled'
    });
    this.runingExcercise = null;
    this.excerciseChange.next(null);
  }

  public getRunningExcercise(): Excercise {
    return {...this.runingExcercise};
  }

  public getCompletedOrCancelledExercises(): Excercise[] {
    return this.excercices.slice();
  }
}
