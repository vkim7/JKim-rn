import { createStore, combineReducers } from 'redux';
import ShopReducer from './shop/shop-reducer';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  shop: ShopReducer
});
const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
export default configureStore;
