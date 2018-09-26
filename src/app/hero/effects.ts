import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { SHOW_HERO_DETAIL } from './actions';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class HeroEffects {

  @Effect({dispatch: false})
  showHeroDetail$: Observable<any> = this.actions$.pipe(
    ofType(SHOW_HERO_DETAIL),
    map((action: any) => ({heroId: action.payload.heroId})),
    tap(({ heroId }) => this.router.navigateByUrl(`/dashboard/hero/${heroId}`))
  );

  constructor(
    private router: Router,
    private actions$: Actions
    ) {}
}

