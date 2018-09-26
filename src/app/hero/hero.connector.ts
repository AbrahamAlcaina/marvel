import { compose, Store, createSelector } from '@ngrx/store';
import { map, propOr, filter, head } from 'ramda';
import { Input, Component, OnInit } from '@angular/core';
import { State } from '../reducers/state';
import { Observable } from 'rxjs';
import { Hero } from './hero';
import { showHeroDetail } from './actions';

const getHeroesState = state => state.heroes;
const heroWithImage = hero => ({ ...hero , image: `${hero.thumbnail.path}.${hero.thumbnail.extension}`});
const combineStates = id => compose(
  head,
  map(heroWithImage),
  filter((hero: Hero) => hero.id === id ),
  propOr([], 'heroes')
);
const getHeroSelector = id => createSelector(getHeroesState, combineStates(id));

@Component({
  selector: 'app-hero-connector',
  template: `<app-hero-card [hero]="hero$|async" [showHeroDetails]="showHeroDetails"></app-hero-card>`
})
export class HeroConnectorComponent implements OnInit {
  @Input() heroId: string;
  hero$: Observable<any>;
  showHeroDetails: (heroId: string) => void;

  ngOnInit() {
    this.hero$ = this.store.select(getHeroSelector(this.heroId));
    this.showHeroDetails = id => this.store.dispatch(showHeroDetail(id));
  }
  constructor(private store: Store<State>) {}
}
