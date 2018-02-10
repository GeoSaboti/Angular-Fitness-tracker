import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {UIService} from '../../shared/ui.service';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../shared/ui.reducer';
import {Observable} from 'rxjs/Observable';
import * as UI from '../../shared/ui.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  maxDate: Date;
  isLoading$: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private uiService: UIService,
    private store: Store<fromRoot.State>
  ) {
  }

  ngOnInit() {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    // this.loadingSubs = this.uiService.loadingStateChanged.subscribe((isLoading: boolean) => {
    //   this.isLoading = isLoading;
    //
    // });
  }

  onSubmit(form: NgForm): void {
    this.store.dispatch(new UI.StartLoading());
    this.authService.registerUser(form.value);
  }

  // ngOnDestroy(): void {
  //   if (this.loadingSubs) {
  //     this.loadingSubs.unsubscribe();
  //   }
  // }

}
