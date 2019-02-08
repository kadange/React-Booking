import React, { Component } from 'react';
import { Card, Button, Table } from 'antd';

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
    showConfirm() {
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

    render() {
        return (
            <Card 
                size="small"
                // title="addDelete"
                // extra={<a href="#">More</a>}
                extra={
                    <div>
                        <Button type="default" onClick={this.showConfirm}>Add</Button>
                        <Button type="danger" >Delete</Button>
                    </div>
                }
                // style={{ width: 700 }}
            >
                <Table rowSelection={rowSelection} columns={columns} scroll={{ x: '100%' }} />
            </Card>
            
        );
    }
}

export default Container;