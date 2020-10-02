// REDUX
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// REDUCERS
import { getInput } from './actions/querys';
import rootReducer from './actions';

export default function generateStore() {
  let store = createStore(rootReducer, applyMiddleware(thunk));
  getInput('')(store.dispatch, store.getState);
  return store;
}
