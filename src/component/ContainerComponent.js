import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Card, Button, Table, Modal } from 'antd';
import ContainerDetails from './ContainerDetailsComponent';
import { addContainerDetails } from '../action/ContainerDetailsAction';

const columns = [{
    title: "Size/Type",
    dataIndex: "sizeType", 
    key: 'sizeType',
}, {
    title: "Quantity",
    dataIndex: "quantity",
    key: 'quantity',
}, {
    title: "Gross Weight",
    dataIndex: "grossWeight",
    key: 'grossWeight',
}, {
    title: "Scale",
    dataIndex: "scale",
    key: 'scale',
}, {
    title: "OB Haulage",
    dataIndex: "obHaulage",
    key: 'obHaulage',
}, {
    title: "IB Haulage",
    dataIndex: "ibHaulage",
    key: 'ibHaulage',
},]

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
};

const data = [{
    sizeType: '20GP',
    quantity: 32,
    grossWeight: 100,
    scale: 'KG',
    obHaulage: 'Carrier',
    ibHaulage: 'Merchant',
  }, {
    sizeType: '20GP',
    quantity: 32,
    grossWeight: 100,
    scale: 'KG',
    obHaulage: 'Carrier',
    ibHaulage: 'Merchant',
  }, {
    sizeType: '20GP',
    quantity: 32,
    grossWeight: 100,
    scale: 'KG',
    obHaulage: 'Carrier',
    ibHaulage: 'Merchant',
  }];

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false };
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleSubmit = () => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            console.log('Received values of form: ', values);
            this.props.addContainerDetails(values);
            
            form.resetFields();

            this.setState({ 
                visible: false,
            });
        });
    }

    saveFormRef = (formRef) => {
        this.formRef = formRef;
    }

    render() {
        return (
            <Card 
                size="small"
                // title="addDelete"
                // extra={<a href="#">More</a>}
                extra={
                    <div>
                        <Button type="default" onClick={this.showModal}>Add</Button>
                        <Button type="danger" >Delete</Button>
                    </div>
                }
                // style={{ width: 700 }}
            >
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleSubmit}
                    onCancel={this.handleCancel}
                    okButtonProps={{ htmlType: "submit" }}
                >
                    <ContainerDetails wrappedComponentRef={this.saveFormRef} />
                </Modal>
                <Table rowSelection={rowSelection} dataSource={this.props.containerDetails} columns={columns} scroll={{ x: '100%' }} />
                {/* <Table rowSelection={rowSelection} dataSource={data} columns={columns} scroll={{ x: '100%'}} /> */}
            </Card>
        );
    }
}

function mapStateToProps(state) {
    console.log(state.containerDetails);
    return {
        containerDetails: state.containerDetails.data,
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({addContainerDetails: addContainerDetails}, dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(Container);