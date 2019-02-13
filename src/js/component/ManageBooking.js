import React, { Component } from 'react';
import ContainerComponent from './ContainerComponent';
import { Form, Button, Divider, Input, Card, Select } from 'antd';
import {connect} from 'react-redux';
import '../css/manage-booking.css';

const Option = Select.Option;

function mapStateToProps(state) {
    return {
        cities: state.cities,
        cgoNatures: state.cargoNatures,
        containerDetails: state.containerDetails.data,
    }
}

const newErrors = {
    errors: []
}

class ManageBooking extends Component {
    validateEndToEndPoint(values, err) {
        if(values.fromCity === values.toCity) {
            newErrors.errors.push({
                message: "From City and To City should not be the same!",
                field: "From City and To City",
            });
            return Object.assign({newErrors}, err);
        }
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
                    window.alert('Fix below errors: \n' + errorMsg);
                }
                return;
            }
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
                            })(
                                <Input allowClear />
                            )}
                        </Form.Item>
                        <Form.Item label="Shipper">
                            {getFieldDecorator('shipper', {
                                rules: [{ required: true, message: 'Please input a Shipper!' }],
                            })(
                                <Input allowClear />
                            )}
                        </Form.Item>
                        <Form.Item label="Forwarder">
                            {getFieldDecorator('forwarder', {
                                rules: [{ required: true, message: 'Please input a Forwarder!' }],
                            })(
                                <Input allowClear />
                            )}
                        </Form.Item>
                        <Form.Item label="Consignee">
                            {getFieldDecorator('consignee', {
                                rules: [{ required: true, message: 'Please input a Consignee!' }],
                            })(
                                <Input allowClear />
                            )}
                        </Form.Item>
                    </Card>
                    <Form.Item className="City" label="From City">
                        {getFieldDecorator('fromCity', {
                            rules: [{ required: true, message: 'Please select a city!' }],
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
                        })(
                            <Input allowClear />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('containerDetails', {
                            rules: [{ required: true, message: 'Please input the cargo details!' }],
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

ManageBooking = connect( mapStateToProps )(ManageBooking);

export default Form.create()(ManageBooking);