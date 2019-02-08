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
    render() {
        return (
            <Card 
                size="small"
                // title="addDelete"
                // extra={<a href="#">More</a>}
                extra={
                    <div>
                        <Button type="default" >Add</Button>
                        <Button type="default" >Delete</Button>
                    </div>
                }
                // style={{ width: 700 }}
            >
                {/* <div style={{ borderStyle: "solid", borderWidth: "1px", borderRadius: "5px", margin: "5px 0", padding: "10px"}}>
                
                </div> */}
                <Table rowSelection={rowSelection} columns={columns} scroll={{ x: '100%' }} />
            </Card>
            
        );
    }
}

export default Container;