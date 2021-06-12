import { createStore, combineReducers } from 'redux';
import cart from './reducers/cart';
import user from './reducers/user';


let reducers = combineReducers({
    cart,
    user
});

export default createStore(
    reducers,   
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
