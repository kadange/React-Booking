import React, {Component} from 'react';
import {connect} from 'react-redux';

class CityList extends Component {

    createOptions() {
        return this.props.cities.map((city) => {
            return (
                <option>{city.code}</option>
            );
        });
    }

    render() {
        return (
            <datalist id="cities" defaultValue="Select city">{this.createOptions()}</datalist>
        );        
    }
}

function mapStateToProps(state) {
    return {
        cities: state.cities,
    }
}

export default connect(mapStateToProps)(CityList);