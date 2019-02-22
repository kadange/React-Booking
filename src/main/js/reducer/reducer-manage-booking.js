const initialState = {
    data: {},
}

export default function (state=initialState, action) {
    switch(action.type) {
        case "GET_SHIPMENT_DETAILS":
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}