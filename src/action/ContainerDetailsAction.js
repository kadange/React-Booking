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