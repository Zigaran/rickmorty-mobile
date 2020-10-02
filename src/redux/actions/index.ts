import { combineReducers } from 'redux';
import querys, { QuerysInitialState } from './querys';
import filterManagement, { FilterInitialState } from './filter';

interface State {
  data: QuerysInitialState;
  filter: FilterInitialState;
}

const State = combineReducers({
  data: querys,
  filter: filterManagement,
});

export default State;
