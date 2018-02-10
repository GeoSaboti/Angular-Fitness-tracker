import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot} from '@angular/router';
import {Store} from '@ngrx/store';
import * as fromRoot from '../app.reducer';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private router: Router,
    private store: Store<fromRoot.State>
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select(fromRoot.getIsAuth).take(1);
  }
  // Lazy load guard
  canLoad(route: Route) {
    return this.store.select(fromRoot.getIsAuth).take(1);
  }
}
