import React from 'react';
import CityList from '../container/city-datalist';
import ContainerComponent from './ContainerComponent';

const App = () => {
    return (
        <div style={{ borderStyle: "groove", padding: "10px"}}>
            <CityList componentName="From City" name="fromCity" />
            <CityList componentName="To City" name="toCity" />
            <ContainerComponent />
        </div>
    );
}

export default App;