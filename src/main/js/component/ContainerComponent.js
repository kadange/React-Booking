import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, Button, Table, Modal } from 'antd';
import ContainerDetails from './ContainerDetailsComponent';
import {thunkAddContainerDetails, thunkDeleteContainerDetails, thunkUpdateContainerDetails } from '../action/ContainerDetailsAction';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            visible: false,
            selectedRowKeys: [],
            selectedRows: [],
            rowToUpdate: {},
            isEditRow: false,
            keyValue: 0,
        };
        
    }

    addContainerDetails = () => {
        this.setState({
            visible: true,
            isEditRow: false,
        });
    }

    deleteSelectedRowsKeys = () => {
        this.setState({ selectedRowKeys: [], selectedRows: [] })

        this.state.selectedRows.map((row) => {
            this.props.thunkDeleteContainerDetails(row).then(() => {
                this.props.formProps.setFieldsValue({
                    containerDetails: this.props.containerDetails,
                });
            });
        });
    }

    onEditcontainerDetail = (row) => {
        this.setState({
            rowToUpdate: row,
            visible: true,
            isEditRow: true,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
            rowToUpdate: {},
        });
    }

    handleSubmit = () => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            values = Object.assign({id: this.state.rowToUpdate.id},values);

            if(this.state.isEditRow) {
                let newUpdateValue = Object.assign({key: this.state.rowToUpdate.key}, values);
                this.props.thunkUpdateContainerDetails(newUpdateValue).then(() => {
                    this.props.formProps.setFieldsValue({
                        containerDetails: this.props.containerDetails,
                    });
                })
            } else {
                let currKeyValue = this.state.keyValue;
                currKeyValue++;
                values = Object.assign({key: currKeyValue}, values);
                this.props.thunkAddContainerDetails(values).then(() => {
                    this.props.formProps.setFieldsValue({
                        containerDetails: this.props.containerDetails,
                    });
                })
                this.setState({
                    keyValue: currKeyValue,
                })
            }
            
            form.resetFields();
            this.setState({ 
                visible: false,
                rowToUpdate: {},
            });
        });
    }

    saveFormRef = (formRef) => {
        this.formRef = formRef;
    }

    onSelectChange = (selectedRowKeys, selectedRows) => {
        this.setState({ selectedRowKeys, selectedRows });
    }

    componentWillReceiveProps(nextProp) {
        if(this.props.manageBooking !== nextProp.manageBooking) {
            let currKeyValue = this.state.keyValue;
            nextProp.manageBooking.containerDetails.map(container => {
                currKeyValue++;
                container = Object.assign({key: currKeyValue}, container);
                this.props.thunkAddContainerDetails(container)
            })
            this.setState({
                keyValue: currKeyValue,
            })
        }
    }

    render() {
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
        }, {
            title: "",
            key: 'operation',
            render: (record) => (
                <Button type="default" size="small" onClick={() => this.onEditcontainerDetail(record)}>Edit</Button>
            )
        }]

        const { selectedRowKeys, selectedRows } = this.state;
        const rowSelection = {
            selectedRowKeys, 
            selectedRows,
            onChange: this.onSelectChange,
        };

        return (
            <Card 
                size="small"
                extra={
                    <div>
                        <Button type="default" onClick={this.addContainerDetails}>Add</Button>
                        <Button type="danger" onClick={this.deleteSelectedRowsKeys}>Delete</Button>
                    </div>
                }
            >
                <Modal
                    title="Container Details"
                    visible={this.state.visible}
                    onOk={this.handleSubmit}
                    onCancel={this.handleCancel}
                >
                    <ContainerDetails wrappedComponentRef={this.saveFormRef} defaultValues={this.state.rowToUpdate} />
                </Modal>
                <Table rowSelection={rowSelection} dataSource={this.props.containerDetails} size="small" columns={columns} scroll={{ x: '100%' }} />
            </Card>
        );
    }
}

function mapStateToProps(state) {
    return {
        containerDetails: state.containerDetails.data,
        manageBooking: state.manageBooking.data,
    }
}

function matchDispatchToProps(dispatch) {
    return {
        thunkAddContainerDetails: bindActionCreators(thunkAddContainerDetails, dispatch),
        thunkDeleteContainerDetails: bindActionCreators(thunkDeleteContainerDetails, dispatch),
        thunkUpdateContainerDetails: bindActionCreators(thunkUpdateContainerDetails, dispatch),
    }
}

export default connect(mapStateToProps,matchDispatchToProps)(Container);