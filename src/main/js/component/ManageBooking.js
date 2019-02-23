import React, { Component } from 'react';
import ContainerComponent from './ContainerComponent';
import { Form, Button, Divider, Input, Card, Select, notification  } from 'antd';
import {connect} from 'react-redux';
import '../css/manage-booking.css';
import * as ManageBookingAction from '../action/ManageBookingAction';

const Option = Select.Option;

function mapStateToProps(state) {
    return {
        cities: state.cities,
        cgoNatures: state.cargoNatures,
        containerDetails: state.containerDetails.data,
        manageBooking: state.manageBooking.data,
    }
}

const matchDispatchToProps = dispatch => ({
    onSubmit(values) {
        dispatch(ManageBookingAction.create(values));
    }
})

const newErrors = {
    errors: []
}

const openNotificationWithIcon = (type, message, description) => {
    notification.config({
        placement: "topLeft",
        duration: 0,
    });
    notification[type]({
      message: message,
      description: description,
    });
  };

class ManageBooking extends Component {
    validateEndToEndPoint(values, err) {
        if(values.fromCity === values.toCity) {
            newErrors.errors.push({
                message: "From City and To City should not be the same!",
                field: "From City and To City",
            });
            return Object.assign({newErrors}, err);
        }
        return err;
    }

    handleSubmit = (e) => {
        newErrors.errors = [];
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            err = this.validateEndToEndPoint(values, err);

            if (err) {
                if(err.newErrors) {
                    let errorMsg = "";
                    err.newErrors.errors.forEach((error) => {
                        errorMsg += error.message + '\n';
                    });
                    openNotificationWithIcon('warning', 'Fix below errors!', errorMsg);
                }
                return;
            }
            values = Object.assign({bookingNumber: this.props.manageBooking.bookingNumber}, values);
            this.props.onSubmit(values);
        });
    }

    createCityOptions() {
        return this.props.cities.map((city) => {
            return (
                <Option key={city.id} value={city.code} >{city.name}</Option>
            );
        });
    }

    createCargoNatureOptions() {
        return this.props.cgoNatures.map((nature) => {
            return (
                <Option key={nature.id} value={nature.code} >{nature.name}</Option>
            );
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div style={{ borderStyle: "groove", padding: "10px"}}>
                <Form layout="vertical" onSubmit={this.handleSubmit}>
                    <Form.Item label="Booking Office">
                        {getFieldDecorator('bookingOffice', {
                            rules: [{ required: true, message: 'Please input a Booking Office!' }],
                            initialValue: this.props.manageBooking.bookingOffice,
                        })(
                            <Input allowClear />
                        )}
                    </Form.Item>
                    <Card 
                        size="small"
                        title="Shipment Parties"
                    >
                        <Form.Item label="Booking Party">
                            {getFieldDecorator('bookingParty', {
                                rules: [{ required: true, message: 'Please input a Booking Party!' }],
                                initialValue: this.props.manageBooking.bookingParty,
                            })(
                                <Input allowClear />
                            )}
                        </Form.Item>
                        <Form.Item label="Shipper">
                            {getFieldDecorator('shipper', {
                                rules: [{ required: true, message: 'Please input a Shipper!' }],
                                initialValue: this.props.manageBooking.shipper,
                            })(
                                <Input allowClear />
                            )}
                        </Form.Item>
                        <Form.Item label="Forwarder">
                            {getFieldDecorator('forwarder', {
                                rules: [{ required: true, message: 'Please input a Forwarder!' }],
                                initialValue: this.props.manageBooking.forwarder,
                            })(
                                <Input allowClear />
                            )}
                        </Form.Item>
                        <Form.Item label="Consignee">
                            {getFieldDecorator('consignee', {
                                rules: [{ required: true, message: 'Please input a Consignee!' }],
                                initialValue: this.props.manageBooking.consignee,
                            })(
                                <Input allowClear />
                            )}
                        </Form.Item>
                    </Card>
                    <Form.Item className="City" label="From City">
                        {getFieldDecorator('fromCity', {
                            rules: [{ required: true, message: 'Please select a city!' }],
                            initialValue: this.props.manageBooking.fromCity,
                        })(
                            <Select
                                showSearch
                                placeholder="Select a city"
                                optionFilterProp="children"
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            >
                                {this.createCityOptions()}
                            </Select>
                        )}
                    </Form.Item>
                    <Form.Item className="City" label="To City">
                        {getFieldDecorator('toCity', {
                            rules: [{ required: true, message: 'Please select a city!' }],
                            initialValue: this.props.manageBooking.toCity,
                        })(
                            <Select
                                showSearch
                                placeholder="Select a city"
                                optionFilterProp="children"
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            >
                                {this.createCityOptions()}
                            </Select>
                        )}
                    </Form.Item>
                    <Divider orientation="left" >Container Details:</Divider>
                    <Form.Item className="CargoDetail" label="Cargo Nature">
                        {getFieldDecorator('cargoNature', {
                            rules: [{ required: true, message: 'Please select the cargo nature!' }],
                            initialValue: this.props.manageBooking.cargoNature,
                        })(
                            <Select
                                showSearch
                                placeholder="Select a cargo nature"
                                optionFilterProp="children"
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                name={this.props.name}
                            >
                                {this.createCargoNatureOptions()}
                            </Select>
                        )}
                    </Form.Item>
                    <Form.Item className="CargoDetail" label="Description">
                        {getFieldDecorator('cargoDescription', {
                            rules: [{ required: true, message: 'Please input the description!' }],
                            initialValue: this.props.manageBooking.cargoDescription,
                        })(
                            <Input allowClear />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('containerDetails', {
                            rules: [{ required: true, message: 'Please input the cargo details!' }],
                            initialValue: this.props.manageBooking.containerDetails,
                        },)(
                            <ContainerComponent formProps={this.props.form} />
                        )}
                    </Form.Item>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form>
            </div>
        );
    }
}

ManageBooking = connect( mapStateToProps, matchDispatchToProps )(ManageBooking);

export default Form.create()(ManageBooking);