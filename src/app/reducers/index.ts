import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { environment } from '../../environments/environment';
import { heroesReducer } from '../heroes/reducer';
import { State } from './state';

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  heroes: heroesReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
