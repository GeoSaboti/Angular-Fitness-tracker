import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Excercise} from './excercise.model';
import {AngularFirestore} from 'angularfire2/firestore';
import {Subscription} from 'rxjs/Subscription';

@Injectable()
export class TrainingService {

  excerciseChange: Subject<Excercise> = new Subject<Excercise>();
  excercisesChange: Subject<Excercise[]> = new Subject<Excercise[]>();
  finishedExcercisesChange: Subject<Excercise[]> = new Subject<Excercise[]>();

  private availableExcercises: Excercise[];
  private runingExcercise: Excercise;
  private fbSubs: Subscription[] = [];

  constructor(
    private db: AngularFirestore
  ) {
  }

  public fetchAvailableExcercises(): void {
    this.fbSubs.push(this.db
      .collection('availableExcercices')
      .snapshotChanges()
      .map(docArray => {
        return docArray.map(doc => {
          return {
            id: doc.payload.doc.id,
            name: doc.payload.doc.data().name,
            duration: doc.payload.doc.data().duration,
            calories: doc.payload.doc.data().calories
          };
        });
      })
      .subscribe((exercises: Excercise[]) => {
        this.availableExcercises = exercises;

        this.excercisesChange.next([...this.availableExcercises]);
      }));
  }

  public startExcercise(selectedId: string): void {
    // this.db.doc('availableExcercises/' + selectedId).update({lastSelected: new Date()});
    this.runingExcercise = this.availableExcercises.find(excercise =>  excercise.id === selectedId);
    this.excerciseChange.next({...this.runingExcercise});
  }

  public completeExcercise(): void {
    this.addDataToDatabase({
      ...this.runingExcercise,
      date: new Date(),
      state: 'completed'
    });
    this.runingExcercise = null;
    this.excerciseChange.next(null);
  }

  public cancelExcercise(progress: number): void {
    this.addDataToDatabase({
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

  public fetchCompletedOrCancelledExercises(): void {
    this.fbSubs.push(this.db.collection('finishedExcercises').valueChanges().subscribe((excercises: Excercise[]) => {
      this.finishedExcercisesChange.next(excercises);
    }));
  }

  calcelSubscriptions(): void {
    this.fbSubs.forEach(sub => sub.unsubscribe());
  }

  private addDataToDatabase(excercise: Excercise): void {
    this.db.collection('finishedExcercises').add(excercise);
  }
}
