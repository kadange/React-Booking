import axios from '../../js/middleware/api'

export const create = (values) => {
    return (dispatch) => {
        return axios
            .post('/save', values)
            .then((response) => {
                console.log('values after call `/save`: ',response.data);
            })
    }
};