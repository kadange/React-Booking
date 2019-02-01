import React from 'react';
import CityList from '../container/CityContainer';
import ContainerComponent from './ContainerComponent';
import {Button, Divider, Input} from 'antd';

const App = () => {
    return (
        <div style={{ borderStyle: "groove", padding: "10px"}}>
            <CityList componentName="From City" name="fromCity" />
            <CityList componentName="To City" name="toCity" />
            <Divider orientation="left" >Container Details:</Divider>
                        
            <label>Description: </label><Input placeholder="Cargo Description" allowClear />
            <Button type="ghost">Add</Button> <Button type="default">Delete</Button>
            <ContainerComponent />
        </div>
    );
}

export default App;