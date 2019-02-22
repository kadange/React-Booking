import React, {Component} from 'react';
import ManageBooking from './ManageBooking';
import Home from './Home';
import Search from './Search';
import {connect} from 'react-redux';
import * as ManageBookingAction from '../action/ManageBookingAction';

class AppContent extends Component {
    componentDidMount() {
        let bookingNumber = this.props.bookingNumber;
        console.log('Booking Number: ',bookingNumber);
        if(bookingNumber && bookingNumber !== null) {
            let test = this.props.onLoad(bookingNumber);
            console.log('test: ', test);
            console.log('Booking: ',this.props.data);
        }
    }
    
    render() {
        let body = null;
        switch(this.props.activeMenu) {
            case "MAIN_MENU":
                body = <Home />;
                break;
            case "MANAGE_MENU":
                body = <ManageBooking />;
                break;
            case "SEARCH_MENU":
                body = <Search />;
                break;
            default:
                body = <Home />;
                break;
        }

        return body;
    }
}

const matchDispatchToProps = dispatch => ({
    onLoad(values) {
        return dispatch(ManageBookingAction.update(values));
    }
})

function mapStateToProps(state) {
    return {
        data: state.manageBooking.data,
    }
}

export default connect(mapStateToProps,matchDispatchToProps)(AppContent);