export const addContainerDetails = (values) => {
    console.log('ContainerDetailsAction - size/type: ', values.sizeType);
    return {
        type: "ADD_CONTAINER_DETAILS",
        payload: values
    }
};