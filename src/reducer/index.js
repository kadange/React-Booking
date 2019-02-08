import {combineReducers} from 'redux';
import CityReducer from './reducer-city';
import MenuReducer from './reducer-menu';
import {reducer as formReducer} from 'redux-form';

const allReducers = combineReducers({
    cities: CityReducer,
    activeMenu: MenuReducer,
    manageForm: formReducer,
});

export default allReducers;