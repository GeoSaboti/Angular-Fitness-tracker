import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle: EventEmitter<void> = new EventEmitter<void>();
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

  onToggleSidenav(): void {
    this.sidenavToggle.emit();
  }

  onLogout(): void {
    this.authService.logOut();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}
