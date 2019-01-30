import {combineReducers} from 'redux';
import City from './reducer-city';

const allReducers = combineReducers({
    cities: City
});

export default allReducers;