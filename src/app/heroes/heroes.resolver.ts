import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../reducers/state';
import { getHeroes } from './actions';

@Injectable()
export class HeroesResolver implements Resolve<void> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.store.dispatch(getHeroes());
  }

  constructor(private store: Store<State>) {}
}
