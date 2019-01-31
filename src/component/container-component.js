import React from 'react';
import Button from 'antd/lib/button';
//import 'antd/lib/button/style/css';

const Container = () => {
    return (
        <div>
            <fieldset>
                <legend>Container Details:</legend>
                <Button type="ghost">Add</Button>
                <Button type="default">Delete</Button>
                <br/>
                Description: <input type="text" name="cargoDesc"/>

            </fieldset>
        </div>
    );
}

export default Container;