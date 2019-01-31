import React from 'react';

const Container = () => {
    return (
        <div>
            <fieldset>
                <legend>Container Details:</legend>
                <button>Add</button>
                <button>Delete</button>
                <br/>
                Description: <input type="text" name="cargoDesc"/>

            </fieldset>
        </div>
    );
}

export default Container;