import {combineReducers} from 'redux';
import productsReducer from './products/productsReducer'

const rootReducer = combineReducers({product: productsReducer});

export default rootReducer;