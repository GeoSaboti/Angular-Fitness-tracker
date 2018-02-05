import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit, OnDestroy {

  @Output() closeSidenav: EventEmitter<void> = new EventEmitter<void>();
  isAuth: boolean;
  authSubscription: Subscription;
  constructor(
    private authService: AuthService
  ) {
    this.isAuth = false;
  }

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe((authStatus: boolean) => {
      this.isAuth = authStatus;
    });
  }

  onClose(): void {
    this.closeSidenav.emit();
  }

  onLogout(): void {
    this.authService.logOut();
    this.onClose();
  }


  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}
