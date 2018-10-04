import { createAction } from 'redux-actions';

export const SHOW_HERO_DETAIL = 'SHOW_HERO_DETAIL';
export const HIDE_HERO_DETAIL = 'HIDE_HERO_DETAIL';
export const LOAD_HEROES_RELATED = 'LOAD_HEROES_RELATED';

export const showHeroDetail = createAction(SHOW_HERO_DETAIL, heroId => ({heroId}), () => ({ ga: true }));
export const hideHeroDetail = createAction(HIDE_HERO_DETAIL);
export const loadHeroesRelated = createAction(LOAD_HEROES_RELATED);
