export const addContainerDetails = (values) => {
    console.log("Add to table: " + values);
    return {
        type: "ADD_CONTAINER_DETAILS",
        payload: values
    }
};