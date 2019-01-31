import React from 'react';
import CityList from '../container/city-datalist';
import Container from './container-component';

const App = () => {
    return (
        <div>
            <CityList componentName="From City" name="fromCity" />
            <CityList componentName="To City" name="toCity" />
            <Container />
        </div>
    );
}

export default App;