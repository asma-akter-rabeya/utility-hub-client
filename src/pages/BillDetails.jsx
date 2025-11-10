import React, { useEffect } from 'react';
import { useParams } from 'react-router';

const BillDetails = () => {
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/bills/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }, [id])
    return (
        <div>
            this is bill details page
        </div>
    );
};

export default BillDetails;