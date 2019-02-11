const initialState = {
    data: [],
}

export default function (state=initialState, action) {
    switch(action.type) {
        case "ADD_CONTAINER_DETAILS":
            return {
                ...state,
                data: state.data.concat(action.payload)
            }
        case "DELETE_CONTAINER_DETAILS":
            return {
                ...state,
                data: state.data.filter(data => data !== action.payload)
            }
        default:
            return state;
    }
}