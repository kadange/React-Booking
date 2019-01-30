import React from 'react';
import CityList from '../container/city-dropdown-list';

const App = () => {
    return (
        <div>
            <h1>Hello!</h1>
            From City: <input list="cities" name="fromCity" /><CityList />
            <br />
            To City: <input list="cities" name="toCity" /><CityList />
            <fieldset>
                <legend>Container Details:</legend>
            </fieldset>
        </div>
    );
}

export default App;