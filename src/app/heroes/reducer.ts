import {handleActions} from 'redux-actions';
import { LOAD_HEROES_SUCCESS, LOAD_HEROES, LOAD_HEROES_FAILED } from './actions';
import { path } from 'ramda';
import { heroAdapter } from '../reducers/state';
import { Hero } from '../hero/hero';


const loadHeroes =  state => ({...state, loading: true });
const loadHeroesSuccess = (state, action) =>
  heroAdapter.addMany(
    path(['payload', 'data', 'results'], action), {
      ...state,
      loading: false,
      loaded: true
    });

const loadHeroesFailed =  () => ({loading: false, loaded: false});
const initialState =  heroAdapter.getInitialState({loaded: false, loading: false});

export const heroesReducer = handleActions({
  [LOAD_HEROES]: loadHeroes,
  [LOAD_HEROES_SUCCESS]: loadHeroesSuccess,
  [LOAD_HEROES_FAILED]: loadHeroesFailed
}, initialState);
