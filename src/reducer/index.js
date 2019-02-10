import {combineReducers} from 'redux';
import CityReducer from './reducer-city';
import MenuReducer from './reducer-menu';
import CargoNatureReducer from './reducer-cargo-nature';
import SizeType from './reducer-sizetype';
import ContainerDetailsReducer from './reducer-container-details';
import {reducer as formReducer} from 'redux-form';

const allReducers = combineReducers({
    cities: CityReducer,
    activeMenu: MenuReducer,
    cargoNatures: CargoNatureReducer,
    sizeTypes: SizeType,
    containerDetails: ContainerDetailsReducer,
    manageForm: formReducer,
});

export default allReducers;