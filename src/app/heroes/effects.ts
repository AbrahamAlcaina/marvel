import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { LOAD_HEROES, getHeroesSuccess, getHeroesFailed} from './actions';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MarvelApiService } from '../api/marvelApi.service';
import { Hero } from '../hero/hero';

@Injectable()
export class HeroesEffects {
  @Effect()
  loadHeroes$: Observable<any> = this.actions$.pipe(
    ofType(LOAD_HEROES),
    mergeMap(action =>
      this.api.getHeroes().pipe(
        map(getHeroesSuccess),
        catchError(() => of(getHeroesFailed()))
      )
    )
  );
  constructor(
    private actions$: Actions,
    private api: MarvelApiService ) {}
}

