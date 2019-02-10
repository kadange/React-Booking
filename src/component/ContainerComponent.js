import React, { Component } from 'react';
import { Card, Button, Table, Modal } from 'antd';
import ContainerDetails from './ContainerDetailsComponent';

const columns = [{
    title: "Size/Type",
    dataIndex: "sizeType",
}, {
    title: "Quantity",
    dataIndex: "quantity",
}, {
    title: "Gross Weight",
    dataIndex: "grossWeight",
}, {
    title: "Scale",
    dataIndex: "scale",
}, {
    title: "OB Haulage",
    dataIndex: "obHaulage",
}, {
    title: "IB Haulage",
    dataIndex: "ibHaulage",
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
        console.log('handle submit')
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            console.log('Received values of form: ', values);
            form.resetFields();
            this.setState({ visible: false });
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
                <Table rowSelection={rowSelection} columns={columns} scroll={{ x: '100%' }} />
            </Card>
            
        );
    }
}

export default Container;