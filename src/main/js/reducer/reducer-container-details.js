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
        case "UPDATE_CONTAINER_DETAILS":
            console.log("");
            let index = state.data.map((data) => {
                return data.key;
            }).indexOf(action.payload.key)
            state.data[index] = action.payload;
            return {
                ...state,
                data: state.data
            }
        default:
            return state;
    }
}