import React from 'react';
import { useParams } from 'react-router';
// import bike from '../../fakeData/bike';
import vehicle from '../../fakeData/vehicle';
import TimeDatePick from '../TimeDatePick/TimeDatePick';
import VehicleType from '../VehicleType/VehicleType';


const DestinationOutput = (props) => {
    const VehicleName = useParams();
    const vehiclesType = VehicleName.VehicleName;

    const exactObject = vehicle.find( vehicle => vehicle.VehicleName === vehiclesType)
    // console.log("vehicle", vehicle)
    // console.log('VehicleName',VehicleName)
    const {fromInput,toInput} = props.destinationInputValue;
    // console.log(bike)
    return (
        <div className = 'bg-dark m-2 p-3 rounded'>
            <div className="bg-success m-2 p-3 rounded">
                <h4>from :{fromInput}</h4>
                <h4>to :{toInput}</h4>
            </div>
            <div className="bg-white p-2 m-2 rounded text-center d-flex justify-content-around">
                <h6 className='pt-1'>Date:</h6>
                <TimeDatePick></TimeDatePick>
            </div>

            {
                exactObject && exactObject.bike.map(vehicle => <VehicleType vehicle = {vehicle}></VehicleType>)
            }
            
        </div>
    );
};

export default DestinationOutput;