import { Component, OnInit } from '@angular/core';
import { Store, createSelector } from '@ngrx/store';
import { Observable } from 'rxjs';
import { propOr, compose, map } from 'ramda';
import { State } from '../reducers/state';
import { Hero } from '../hero/hero';

const getHeroesState = state => state.heroes;
const heroId = (hero: Hero) => (hero.id);
const combineStates = compose(
  propOr([], 'ids')
);
const getHeroesSelector = createSelector(getHeroesState, combineStates);

@Component({
  selector: 'app-heroes',
  styleUrls: ['./heroes.connector.scss'],
  template: `
    <app-heroes-component class="heroes" [heroes]="heroes$|async"></app-heroes-component>
  `
})
export class HeroesConnectorComponent implements OnInit {
  heroes$: Observable<any>;

  constructor(private store: Store<State>) {}
  ngOnInit() {
    this.heroes$ = this.store.select(getHeroesSelector);
  }
}
