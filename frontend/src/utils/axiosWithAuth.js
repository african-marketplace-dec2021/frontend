import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: "https://african-marketplace-dec-2021.herokuapp.com/api"
    });
}

export default axiosWithAuth;