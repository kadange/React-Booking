import React, { Component } from 'react';
import { Calendar } from 'antd';
import Clock from 'react-live-clock';

class Home extends Component {
    onPanelChange(value, mode) {
        console.log(value, mode);
    }

    render() {
        return (
            <div>
                <h1>Welcome!</h1>
                <h2>Time: <Clock format="h:mm:ss A" ticking={true} interval={1000} /></h2>
                <div style={{ width: 500, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                    <Calendar fullscreen={false} onPanelChange={this.onPanelChange} />
                </div>
            </div>
        );
    }
}

export default Home;