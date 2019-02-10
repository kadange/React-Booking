import React, { Component } from 'react';
import { Card, Button, Table, Modal } from 'antd';

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

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
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
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
                <Table rowSelection={rowSelection} columns={columns} scroll={{ x: '100%' }} />
            </Card>
            
        );
    }
}

export default Container;