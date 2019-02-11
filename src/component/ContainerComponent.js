import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, Button, Table, Modal } from 'antd';
import ContainerDetails from './ContainerDetailsComponent';
import { addContainerDetails } from '../action/ContainerDetailsAction';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            visible: false,
            selectedRowKeys: [],
        };
        
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    deleteSelectedRowsKeys = () => {
        this.state.selectedRowKeys.map((rowKey) => {
            console.log('row key: ', rowKey);
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
        }]

        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
                this.setState({ selectedRowKeys });
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
            }),
        };

        return (
            <Card 
                size="small"
                extra={
                    <div>
                        <Button type="default" onClick={this.showModal}>Add</Button>
                        <Button type="danger" onClick={this.deleteSelectedRowsKeys}>Delete</Button>
                    </div>
                }
            >
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleSubmit}
                    onCancel={this.handleCancel}
                >
                    <ContainerDetails wrappedComponentRef={this.saveFormRef} />
                </Modal>
                <Table rowSelection={rowSelection} dataSource={this.props.containerDetails} size="small" columns={columns} scroll={{ x: '100%' }} />
            </Card>
        );
    }
}

function mapStateToProps(state) {
    return {
        containerDetails: state.containerDetails.data,
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({addContainerDetails: addContainerDetails}, dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(Container);