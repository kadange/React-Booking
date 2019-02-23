import axios from '../../js/middleware/api'
import { message } from 'antd'; 

export const create = (values) => {
    console.log('To save: ', values)
    return () => {
        return axios
            .post('/save', values)
            .then((response) => {
                message.info(response.data);
            })
    }
};

export const update = bookingNumber => async dispatch => {
    const response = await axios.get(`/retrieveBooking?bookingNumber=${bookingNumber}`);
    dispatch({ type: "GET_SHIPMENT_DETAILS", payload: response.data });
}