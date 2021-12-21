import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

const Logout = (props) => {
    const { push } = useHistory();

    useEffect(() => {
        axiosWithAuth().post("NO URL NOT SURE IF I NEED ONE")
            .then(res => {
                localStorage.removeItem('token');
                localStorage.removeItem('role');
                push('/login');
            })
    },[])
    return (<div></div>);
};

export default Logout;
