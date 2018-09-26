import {createAction} from 'redux-actions';

export const LOAD_HEROES = 'LOAD_HEROES';
export const LOAD_HEROES_SUCCESS = 'LOAD_HEROES_SUCCESS';
export const LOAD_HEROES_FAILED = 'LOAD_HEROES_FAILED';

export const getHeroes = createAction(LOAD_HEROES);
export const getHeroesSuccess = createAction(LOAD_HEROES_SUCCESS, payload => payload);
export const getHeroesFailed = createAction(LOAD_HEROES_FAILED);


