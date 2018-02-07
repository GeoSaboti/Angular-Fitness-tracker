import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class UIService {

  loadingStateChanged: Subject<boolean> = new Subject<boolean>();

  constructor(
    private snackBar: MatSnackBar
  ) {
  }

  showSnackBar(message: string, action: string | null, duration: number ): void {
    this.snackBar.open(message, action, {
      duration: duration
    });
  }

}
