import React, {Component} from 'react';
import {Form, InputNumber, Select} from 'antd';
import {connect} from 'react-redux';

const Option = Select.Option;

function mapStateToProps(state) {
    return {
        sizeTypes: state.sizeTypes,
    }
}

class ContainerDetails extends Component {
    createOptions() {
        return this.props.sizeTypes.map((sizeType) => {
            return (
                <Option key={sizeType.id} value={sizeType.code} >{sizeType.name}</Option>
            );
        });
    }

    render() {
        const { form } = this.props;

        const { getFieldDecorator } = form;

        return (
            <div>
                <Form layout="vertical">
                    <Form.Item label="SizeType">
                        {getFieldDecorator('sizeType', {
                            initialValue: this.props.defaultValues.sizeType,
                        })
                        (<Select
                            showSearch
                            placeholder="Select a sizetype"
                            optionFilterProp="children"
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            {this.createOptions()}
                        </Select>)}
                    </Form.Item>
                    <Form.Item label="Quantity">
                        {getFieldDecorator('quantity', {
                            initialValue: this.props.defaultValues.quantity
                        })
                        (<InputNumber min={1} allowClear />)}
                    </Form.Item>
                    <Form.Item label="Gross Weight">
                        {getFieldDecorator('grossWeight', {
                            initialValue: this.props.defaultValues.grossWeight
                        })
                        (<InputNumber min={0} step={0.1} allowClear />)}
                    </Form.Item>
                    <Form.Item label="Scale">
                        {getFieldDecorator('scale', {
                            initialValue: this.props.defaultValues.scale
                        })
                        (<Select
                            showSearch
                            placeholder="Select a scale"
                            optionFilterProp="children"
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option key={1} value='lbs' >Pounds</Option>
                            <Option key={2} value='KG' >Kilogram</Option>
                            <Option key={3} value='TON' >Tons</Option>
                        </Select>)}
                    </Form.Item>
                    <Form.Item label="OB Haulage">
                        {getFieldDecorator('obHaulage', {
                            initialValue: this.props.defaultValues.obHaulage
                        })
                        (<Select
                            showSearch
                            placeholder="Select a haulage"
                            optionFilterProp="children"
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option key={1} value='Carrier' >Carrier</Option>
                            <Option key={2} value='Merchant' >Merchant</Option>
                        </Select>)}
                    </Form.Item>
                    <Form.Item label="IB Haulage">
                        {getFieldDecorator('ibHaulage', {
                            initialValue: this.props.defaultValues.ibHaulage
                        })
                        (<Select
                            showSearch
                            placeholder="Select a haulage"
                            optionFilterProp="children"
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option key={1} value='Carrier' >Carrier</Option>
                            <Option key={2} value='Merchant' >Merchant</Option>
                        </Select>)}
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

ContainerDetails = connect(mapStateToProps)(ContainerDetails)

export default Form.create()(ContainerDetails);