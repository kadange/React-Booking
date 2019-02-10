import React from 'react';
import CityListComponent from '../container/CityContainer';
import ContainerComponent from './ContainerComponent';
import CargoNatureComponent from '../container/CargoNatureContainer';
import {Button, Divider, Input, Modal, Card} from 'antd';
import {reduxForm, Field} from 'redux-form';
import '../css/manage-booking.css';

const showResults = () => {
    return window.alert('You submitted: \n\n${JSON.string}')
}

const renderCityComponent = ({ name, label, className }) => {
    return <div className={className}><label>{label}</label><CityListComponent name={name}/></div>
}

const renderCargoNatureComponent = ({ name, label, className }) => {
    return <div className={className}><label>{label}</label><CargoNatureComponent name={name}/></div>
}

const rederInputComponent = ({ placeholder, label, className }) => {
    return <div className={className}><label>{label}</label><Input placeholder={placeholder} allowClear /></div>
}

let ManageBooking = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit(showResults)}>
            <div style={{ borderStyle: "groove", padding: "10px"}}>
                <Field name="bookingOffice" label="Booking Office" component={rederInputComponent} />
                <Card 
                    size="small"
                    title="Shipment Parties"
                >
                    <Field name="booking" label="Booking Party" component={rederInputComponent} />
                    <Field name="shipper" label="Shipper" component={rederInputComponent} />
                    <Field name="forwarder" label="Forwarder" component={rederInputComponent} />
                    <Field name="consignee" label="Consignee" component={rederInputComponent} />
                </Card>
                <Field className="City" name="fromCity" label="From City" component={renderCityComponent} />
                <Field className="City" name="toCity" label="To City" component={renderCityComponent} />
                <Divider orientation="left" >Container Details:</Divider>
                <Field className="CargoDetail" name="cargoNature" label="Cargo Nature" component={renderCargoNatureComponent} />
                <Field className="CargoDetail" name="description" label="Description" component={rederInputComponent} />
                
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