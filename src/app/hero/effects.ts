import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { SHOW_HERO_DETAIL, LOAD_HEROES_RELATED } from './actions';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { path, compose, both, prop, filter, is, map as _map, curry } from 'ramda';
import { Store, createSelector } from '@ngrx/store';
import { State } from '../reducers/state';

@Injectable()
export class HeroEffects {

  @Effect({dispatch: false})
  showHeroDetail$: Observable<any> = this.actions$.pipe(
    ofType(SHOW_HERO_DETAIL),
    map(path(['payload', 'heroId'])),
    tap(heroId => this.router.navigate([{outlets: {popup: [ 'hero', heroId]}}]))
  );

  @Effect({dispatch: false})
  loadExtraInfo$: Observable<any> = this.actions$.pipe(
    ofType(LOAD_HEROES_RELATED),
    map(path(['payload', 'heroId'])),
    map(isRelatedInfoLoad(this.store)),
    tap(console.log)
  );

  constructor(
    private router: Router,
    private actions$: Actions,
    private store: Store<State>
    ) {}
}

const getHeroesState = state => state.heroes;
const combineStates = heroId => compose(
  _map(prop('collectionURI')),
  filter(both(is(Object), prop('collectionURI'))),
  path(['entities', heroId])
);

const relatedHeroes = heroId => createSelector([getHeroesState], combineStates(heroId));

const isRelatedInfoLoad = (store: Store<State>) => (heroId: string): Observable<any> => {
  debugger;
  const relatedHeroes$ = store.select(relatedHeroes(heroId));
  return relatedHeroes$;
};

