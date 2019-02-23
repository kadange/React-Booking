import React, {Component} from 'react';
import ManageBooking from './ManageBooking';
import Home from './Home';
import Search from './Search';
import {connect} from 'react-redux';
import * as ManageBookingAction from '../action/ManageBookingAction';

class AppContent extends Component {
    componentDidMount() {
        let bookingNumber = this.props.bookingNumber;
        if(bookingNumber && bookingNumber !== null) {
            this.props.onLoad(bookingNumber);
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
        dispatch(ManageBookingAction.update(values));
    }
})

export default connect(null,matchDispatchToProps)(AppContent);