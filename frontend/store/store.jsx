import {compose, createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

const configureStore = (preloadedState = {}) => (
  createStore(rootReducer, preloadedState, compose(applyMiddleware(thunk)))
)

const Store = configureStore();

export default Store;
