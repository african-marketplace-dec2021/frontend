import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

const Logout = (props) => {
    const { push } = useHistory();

    useEffect(() => {
        axiosWithAuth().post("NO URL YET")
            .then(res => {
                localStorage.removeItem('token');
                localStorage.removeItem('role');
                localStorage.removeItem('username');
                push('/login');
            })
    },[])
    return (<div></div>);
};

export default Logout;
