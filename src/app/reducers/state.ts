import { Hero } from '../hero/hero';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface State {
  router: {};
  heroes: HeroesState;
}

export interface HeroesState extends EntityState<Hero> {
  loading: boolean;
  loaded: boolean;
}

export const heroAdapter: EntityAdapter<Hero> = createEntityAdapter<Hero>();
