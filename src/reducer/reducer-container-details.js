const initialState = {
    data: [
        // {
        //     sizeType: '20GP',
        //     quantity: 32,
        //     grossWeight: 100,
        //     scale: 'KG',
        //     obHaulage: 'Carrier',
        //     ibHaulage: 'Merchant',
        // }
    ],
}

export default function (state=initialState, action) {
    switch(action.type) {
        case "ADD_CONTAINER_DETAILS":
            return {
                ...state,
                data: state.data.concat(action.payload)
            }
        default:
            return state;
    }
}