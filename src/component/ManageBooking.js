import React from 'react';
import CityListComponent from '../container/CityContainer';
import ContainerComponent from './ContainerComponent';
import {Button, Divider, Input, Modal, Form} from 'antd';
import {reduxForm, Field} from 'redux-form';


const confirm = Modal.confirm;

const showResults = () => {
    return window.alert('You submitted: \n\n${JSON.string}')
}

const showConfirm = () => {
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

const renderCityComponent = ({ name, label }) => {
    return <div><label>{label}</label><CityListComponent name={name}/></div>
}

const rederInputComponent = ({ placeholder, label }) => {
    return <div><label>{label}</label><Input placeholder={placeholder} allowClear /></div>
}

let ManageBooking = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit(showResults)}>
            <div style={{ borderStyle: "groove", padding: "10px"}}>
                <Field name="fromCity" label="From City" component={renderCityComponent} />
                <Field name="toCity" label="To City" component={renderCityComponent} />
                <Divider orientation="left" >Container Details:</Divider>
                <Field name="description" label="Description" component={rederInputComponent} />
                
                <ContainerComponent />
                <Button type="primary" htmlType="submit">Submit</Button>
            </div>
        </form>
    );    
}

ManageBooking = reduxForm({
    form: 'booking',
})(ManageBooking)

export default ManageBooking;