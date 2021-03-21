import React, { useState } from 'react';
import DestinationInput from '../DestinationInput/DestinationInput';
import DestinationOutput from '../DestinationOutput/DestinationOutput';
import GMap from '../GMap/GMap';
import TimeDatePick from '../TimeDatePick/TimeDatePick';


const Destination = () => {
    const [destinationInputValue,setDestinationInputValue] = useState({})
    const getValueFromChild = (data) =>{
        setDestinationInputValue(data)
    }
    console.log(destinationInputValue)
    return (
        <div className="row">
            
            <div className="col-md-4 m-4 rounded ">
                {
                destinationInputValue && destinationInputValue.fromInput ? <DestinationOutput destinationInputValue={destinationInputValue} ></DestinationOutput> : <DestinationInput getValueFromChild = {getValueFromChild}></DestinationInput>
                }
            </div>
            
            
            <div className="d-flex justify-content-center col-md-7 mt-5 bg-light rounded">
                <GMap></GMap>
               
            </div>
        </div>
    );
};

export default Destination;