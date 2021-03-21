import React from "react";
import { useParams } from "react-router";
// import bike from '../../fakeData/bike';
import vehicle from "../../fakeData/vehicle";
import TimeDatePick from "../TimeDatePick/TimeDatePick";
import VehicleType from "../VehicleType/VehicleType";

const DestinationOutput = (props) => {
  const VehicleName = useParams();
  const vehiclesType = VehicleName.VehicleName;

   const ChossenObject = vehicle.find(
    (vehicle) => vehicle.VehicleName === vehiclesType
  );

  const chossenObjectChild = vehiclesType &&  ChossenObject[vehiclesType];
  console.log("vehicle", ChossenObject);
  // console.log('VehicleName',VehicleName)
  const { fromInput, toInput } = props.destinationInputValue;
  // console.log(bike)
  return (
    <div className="border m-2 p-3 rounded">
      <div className="bg-info text-white m-2 p-3 rounded">
        <div className="d-flex justify-content-around">
          <h4>From :</h4>
          <h4>{fromInput}</h4>
        </div>
        <div className="d-flex justify-content-around">
          <h4>To :</h4>
          <h4>{toInput}</h4>
        </div>
      </div>
      <div className="bg-white p-2 m-2 rounded text-center d-flex justify-content-around">
        <h6 className="pt-2">Date:</h6>
        <TimeDatePick></TimeDatePick>
      </div>

      {chossenObjectChild && chossenObjectChild.map((vehicle) => <VehicleType vehicle={vehicle}></VehicleType>)}
    </div>
  );
};

export default DestinationOutput;
