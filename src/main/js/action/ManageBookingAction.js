import axios from '../../js/middleware/api'

export const create = (values) => {
    return () => {
        return axios
            .post('/save', values)
            .then((response) => {
                console.log('values after call `/save`: ',response.data);
            })
    }
};

export const update = bookingNumber => async dispatch => {
    const response = await axios.get(`/retrieveBooking?bookingNumber=${bookingNumber}`);
    dispatch({ type: "GET_SHIPMENT_DETAILS", payload: response.data });
}