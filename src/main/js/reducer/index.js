import {combineReducers} from 'redux';
import CityReducer from './reducer-city';
import MenuReducer from './reducer-menu';
import CargoNatureReducer from './reducer-cargo-nature';
import SizeType from './reducer-sizetype';
import ContainerDetailsReducer from './reducer-container-details';
import ManageBookingReducer from './reducer-manage-booking';
import {reducer as formReducer} from 'redux-form';

const allReducers = combineReducers({
    cities: CityReducer,
    activeMenu: MenuReducer,
    cargoNatures: CargoNatureReducer,
    sizeTypes: SizeType,
    containerDetails: ContainerDetailsReducer,
    manageBooking: ManageBookingReducer,
    manageForm: formReducer,
});

export default allReducers;