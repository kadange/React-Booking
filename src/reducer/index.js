import {combineReducers} from 'redux';
import CityReducer from './reducer-city';
import MenuReducer from './reducer-menu';

const allReducers = combineReducers({
    cities: CityReducer,
    activeMenu: MenuReducer,
});

export default allReducers;