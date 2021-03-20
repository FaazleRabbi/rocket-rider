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
            
            <div className="col-md-4">
                {
                    destinationInputValue.fromInput ? <DestinationOutput destinationInputValue={destinationInputValue} ></DestinationOutput> : <DestinationInput getValueFromChild = {getValueFromChild}></DestinationInput>
                }
            </div>
            
            
            <div className="col-md-7 bg-dark rounded">
                {/* <GMap></GMap> */}
                <h4>map</h4>
            </div>
        </div>
    );
};

export default Destination;