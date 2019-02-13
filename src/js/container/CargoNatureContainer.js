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
        cgoNatures: state.cargoNatures,
    }
}

class CityList extends Component {

    createOptions() {
        return this.props.cgoNatures.map((nature) => {
            return (
                <Option key={nature.id} value={nature.code} >{nature.name}</Option>
            );
        });
    }

    render() {
        return (
            <div>
                <Select
                    showSearch
                    placeholder="Select a cargo nature"
                    optionFilterProp="children"
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    name={this.props.name}
                >
                    {this.createOptions()}
                </Select>
            </div>
        );        
    }
}

export default connect(mapStateToProps)(CityList);