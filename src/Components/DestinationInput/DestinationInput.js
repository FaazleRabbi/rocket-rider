import React, { useState } from 'react';

const DestinationInput = (props) => {
    const [destinationInput,setDestinationInput] = useState({
        fromInput:'',
        toInput:''
    })
    const [fromInput,setFromInput] = useState('')
    const handleFromInput = (e) => {
         const from = e.target.value
         setFromInput(from)
    }
    const [toInput,setToInput] = useState('')
    const handleToInput = (e) => {
        const from = e.target.value
        setToInput(from)
    }
    const handleSearchBtn = (e) => {
        e.preventDefault();
        const newDestinationInput ={fromInput,toInput}
        setDestinationInput (newDestinationInput);
        props.getValueFromChild(newDestinationInput)
    } 
    console.log(destinationInput)
    return (
        <div>
            <h6>pick from</h6>
            <input onBlur={handleFromInput} className='form-control' type="text"/>
            <h6>pick to</h6>
            <input onBlur={handleToInput} className='form-control' type="text"/>
            <input onClick={handleSearchBtn} className='form-control btn-primary mt-2' type="submit"/>
        </div>
    );
};

export default DestinationInput;