import React from 'react';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';


const VehicleType = (props) => {
    console.log(props.vehicle);
    const {passenger,type,cost,photoUrl,VehicleName} = props.vehicle;
    return (
        <div className= 'd-flex justify-content-around m-2 shadow rounded'>
            <MotorcycleIcon className='m-2' ></MotorcycleIcon>
            {/* <img style={{height:'100px'}} className='m-2' src='' alt={VehicleName}/> */}
            <h6 className='m-2'>passenger : {passenger}</h6>
            <h6 className='m-2'>${cost}</h6>

        </div>
    );
};

export default VehicleType;