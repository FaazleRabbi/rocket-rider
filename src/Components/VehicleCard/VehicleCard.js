import React from "react";
import { Link } from "react-router-dom";
import "./VehicleCard.css";

const VehicleCard = (props) => {
  console.log(props.vehicle);
  const { VehicleName, photoUrl, vehicleId } = props.vehicle;
  // console.log(props.vehicle.vehicleName)
  return (
    <Link className="vehicleCard bg-white col-md-2 m-2 p-3 m-auto border rounded shadow" to={'/destination/'+VehicleName}>
     
        <img className="w-100" src={photoUrl} alt="img" />
        <h3 className=" text-center">{VehicleName}</h3>
    </Link>
  );
};

export default VehicleCard;
