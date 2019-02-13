import React, {Component} from 'react';
import ManageBooking from './ManageBooking';
import Home from './Home';
import Search from './Search';

class AppContent extends Component {
    
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

export default AppContent;