const initialState = {
    data: [],
}

export default function (state=null, action) {
    switch(action.type) {
        case "ADD_CONTAINER_DETAILS":
            return {
                ...state,
                data: [{
                    sizeType: action.payload.sizeType,
                    quantity: action.payload.quantity,
                    grossWeight: action.payload.grossWeight,
                    scale: action.payload.scale,
                    obHaulage: action.payload.obHaulage,
                    ibHaulage: action.payload.ibHaulage,
                }],
            }
        default:
            return state;
    }
}