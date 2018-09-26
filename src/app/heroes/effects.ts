import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { LOAD_HEROES, getHeroesSuccess, getHeroesFailed} from './actions';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// tslint:disable-next-line:max-line-length
const urlHeroes = 'http://gateway.marvel.com/v1/public/characters?ts=1538122882446&apikey=07206c75f9d96e7d362e9b43bfcc4823&hash=273bad4e8019d8a5456870426f6d28bf&limit=50&offset=0';

@Injectable()
export class HeroesEffects {
  @Effect()
  loadHeroes$: Observable<any> = this.actions$.pipe(
    ofType(LOAD_HEROES),
    mergeMap(action =>
      this.http.get(urlHeroes).pipe(
        map(getHeroesSuccess),
        catchError(() => of(getHeroesFailed()))
      )
    )
  );
  constructor(
    private actions$: Actions,
    private http: HttpClient) {}
}

