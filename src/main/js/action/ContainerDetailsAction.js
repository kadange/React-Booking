export const addContainerDetails = (values) => {
    return {
        type: "ADD_CONTAINER_DETAILS",
        payload: values
    }
};

export const deleteContainerDetails = (values) => {
    return {
        type: "DELETE_CONTAINER_DETAILS",
        payload: values
    }
}

export const updateContainerDetails = (value) => {
    return {
        type: "UPDATE_CONTAINER_DETAILS",
        payload: value
    }
}

export const thunkAddContainerDetails = (values) => dispatch => {
    return Promise.resolve(dispatch(addContainerDetails(values)));
}

export const thunkDeleteContainerDetails = (values) => dispatch => {
    return Promise.resolve(dispatch(deleteContainerDetails(values)));
}

export const thunkUpdateContainerDetails = (value) => dispatch => {
    return Promise.resolve(dispatch(updateContainerDetails(value)));
}