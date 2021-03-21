import React from 'react';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import TrainIcon from '@material-ui/icons/Train';
import DriveEtaIcon from '@material-ui/icons/DriveEta';


const VehicleType = (props) => {
    console.log(props.vehicle);
    const {passenger,type,cost,photoUrl,VehicleName} = props.vehicle;
    let Icon ;
    if(VehicleName ==='bike'){
        Icon = MotorcycleIcon
    }else if(VehicleName ==='car'){
        Icon = DriveEtaIcon
    }else if(VehicleName ==='bus'){
        Icon = DirectionsBusIcon
    }else if(VehicleName ==='train'){
        Icon = TrainIcon
    }


    return (
        <div className= 'd-flex justify-content-around m-2 shadow rounded'>
            <Icon className='m-2'></Icon>
            <h6 className='m-2'>passenger : {passenger}</h6>
            <h6 className='m-2'>${cost}</h6>
        </div>
    );
};

export default VehicleType;