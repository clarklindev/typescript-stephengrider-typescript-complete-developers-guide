import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducer';

const reducers = combineReducers({
  repositories: repositoriesReducer
});

export default reducers;

//defining the reducer type, ie take reducers, and give us whatever type that returns, and assign it to RootState
export type RootState = ReturnType<typeof reducers>;