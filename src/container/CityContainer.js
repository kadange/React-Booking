import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Select} from 'antd';

const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}

function handleBlur() {
console.log('blur');
}

function handleFocus() {
console.log('focus');
}

function mapStateToProps(state) {
    return {
        cities: state.cities,
    }
}

class CityList extends Component {

    createOptions() {
        return this.props.cities.map((city) => {
            return (
                <Option key={city.id} value={city.code} >{city.name}</Option>
            );
        });
    }

    render() {
        return (            
            // <div style={{ margin: "12px" }}>
            //     <label>{this.props.componentName}: </label>
            <div>
                <Select
                    showSearch
                    // style={{ width: 200 }}
                    placeholder="Select a city"
                    optionFilterProp="children"
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                    {this.createOptions()}
                </Select>
            </div>
        );        
    }
}

export default connect(mapStateToProps)(CityList);