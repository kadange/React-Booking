import axios from '../../js/middleware/api'

export const create = (values) => {
    return function(dispatch) {
        return axios
            .post('/save', values)
            .then((response) => {
                console.log('values after call `/save`',response);
            })
    }
};