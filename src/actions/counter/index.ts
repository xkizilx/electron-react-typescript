import { Decrement, Increment } from './actions';

export { increment, decrement } from './actions';

export type CounterActionType = CounterAction[keyof CounterAction];

export type CounterAction = Increment | Decrement;
