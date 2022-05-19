import { createAction, props } from '@ngrx/store';

export const Add = createAction('[Dashboard Component] Add', props<{ name: string, id: number, sprites: string }>());
export const Remove = createAction('[Dashboard Component] Remove', props<{ id: number }>());
