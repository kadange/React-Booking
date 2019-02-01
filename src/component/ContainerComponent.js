import React from 'react';
import {Button, Divider} from 'antd';

const Container = () => {
    return (
        <div>
            {/* <fieldset>
                <legend>Container Details:</legend>
                <Button type="ghost">Add</Button>
                <Button type="default">Delete</Button>
                <br/>
                Description: <input type="text" name="cargoDesc"/>

            </fieldset> */}
            <Divider orientation="left" >Container Details:</Divider>
        </div>
    );
}

export default Container;