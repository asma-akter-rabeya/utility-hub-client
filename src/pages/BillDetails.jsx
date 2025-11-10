import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import useAxios from '../hook/useAxios';

const BillDetails = () => {
    const { id } = useParams();
    const axios = useAxios()

    useEffect(() => {
        axios.get(`http://localhost:3000/bills/${id}`)
            .then(data => {
                console.log(data)
            })
    }, [id, axios])
    return (
        <div>
            this is bill details page
        </div>
    );
};

export default BillDetails;