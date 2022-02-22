import {devToolsEnhancer} from 'redux-devtools-extension';
import rootReducer from './reducers';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import api from '../api';

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk.withExtraArgument(api)), devToolsEnhancer({})),
);

export default store;
