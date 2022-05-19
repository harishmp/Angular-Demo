import { createReducer, createSelector, on } from '@ngrx/store';
import { Add, Remove } from './pokemon.actions';

export const pokemonFeatureKey = 'pokemon';

export const initialState = {
    insertion: []
};

export const _pokemonReducer = createReducer(
  initialState,
  on(Add, (state, { name, id, sprites }) => ({
    ...state,
    insertion: [...state.insertion, { name: name, id: id, sprites: sprites }] as any
  })),
  on(Remove, (state, { id }) => ({
    ...state,
    insertion: state.insertion.filter((i: any) => i.id !== id)
  }))
);

export const selectPokemonState = (state: any) => state.pokemon;

export const selectWishlist = createSelector(
    selectPokemonState,
    (state) => state?.insertion
);

export function pokemonReducer(state: any, action: any) {
    return _pokemonReducer(state, action);
}