import {combineReducers} from 'redux';
import CityReducer from './reducer-city';
import MenuReducer from './reducer-menu';
import CargoNatureReducer from './reducer-cargo-nature';
import SizeType from './reducer-sizetype';
import {reducer as formReducer} from 'redux-form';

const allReducers = combineReducers({
    cities: CityReducer,
    activeMenu: MenuReducer,
    cargoNatures: CargoNatureReducer,
    sizeTypes: SizeType,
    manageForm: formReducer,
});

export default allReducers;