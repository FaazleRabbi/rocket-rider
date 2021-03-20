import React from 'react';

const VehicleType = (props) => {
    console.log(props.vehicle);
    const {passenger,type,cost,photoUrl} = props.vehicle;
    return (
        <div className= 'd-flex justify-content-around bg-white m-2 rounded'>
            <img className='m-2' src={photoUrl} alt="Img"/>
            <h6 className='m-2'>passenger : {passenger}</h6>
            <h6 className='m-2'>${cost}</h6>

        </div>
    );
};

export default VehicleType;