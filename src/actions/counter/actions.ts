import { Action, ActionCreator as AC } from 'redux';

export interface Increment extends Action {
  type: 'INCREMENT';
}

export interface Decrement extends Action {
  type: 'DECREMENT'
}

export const increment: AC<Increment> = () => ({ type: 'INCREMENT' });

export const decrement: AC<Decrement> = () => ({ type: 'DECREMENT' });
