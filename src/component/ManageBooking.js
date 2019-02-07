import React, {Component} from 'react';
import CityList from '../container/CityContainer';
import ContainerComponent from './ContainerComponent';
import {Button, Divider, Input, Modal, Form, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, AutoComplete} from 'antd';


const confirm = Modal.confirm;

const ManageBooking = () => {
    function showConfirm() {
        confirm({
          title: 'Do you want to delete these items?',
          content: 'When clicked the OK button, this dialog will be closed after 1 second',
          onOk() {
            return new Promise((resolve, reject) => {
              setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
            }).catch(() => console.log('Oops errors!'));
          },
          onCancel() {},
        });
    }

    return (
        <div style={{ borderStyle: "groove", padding: "10px"}}>
            <CityList componentName="From City" name="fromCity" />
            <CityList componentName="To City" name="toCity" />
            <Divider orientation="left" >Container Details:</Divider>
                        
            <label>Description: </label><Input placeholder="Cargo Description" allowClear />
            <Button type="default" onClick={showConfirm}>Add</Button><Button type="default">Delete</Button>
            <ContainerComponent />
        </div>
    );
}



// const confirm = Modal.confirm;

// class ManageBooking extends Component {
//     showConfirm() {
//         confirm({
//             title: 'Do you want to delete these items?',
//             content: 'When clicked the OK button, this dialog will be closed after 1 second',
//             onOk() {
//             return new Promise((resolve, reject) => {
//                 setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
//             }).catch(() => console.log('Oops errors!'));
//             },
//             onCancel() {},
//         });
//     }

//     render() {
//         return (
//             <div style={{ borderStyle: "groove", padding: "10px"}}>
//                 <CityList componentName="From City" name="fromCity" />
//                 <CityList componentName="To City" name="toCity" />
//                 <Divider orientation="left" >Container Details:</Divider>
                            
//                 <label>Description: </label><Input placeholder="Cargo Description" allowClear />
//                 <Button type="default" onClick={this.showConfirm()}>Add</Button><Button type="default">Delete</Button>
//                 <ContainerComponent />
//             </div>
//         )
//     }
// }

export default ManageBooking;