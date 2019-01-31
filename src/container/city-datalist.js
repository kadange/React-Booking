import React, {Component} from 'react';
import {connect} from 'react-redux';

class CityList extends Component {

    createOptions() {
        return this.props.cities.map((city) => {
            return (
                <option value={city.code} >{city.name}</option>
            );
        });
    }

    render() {
        return (
            <div>
                <label>{this.props.componentName}: </label>
                <input list="city_list" name={this.props.name} autoComplete="on" autoCapitalize="on"/>
                <datalist id="city_list">{this.createOptions()}</datalist>
            </div>
        );        
    }
}

function mapStateToProps(state) {
    return {
        cities: state.cities,
    }
}

export default connect(mapStateToProps)(CityList);