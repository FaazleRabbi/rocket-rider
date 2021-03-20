import React from "react";
import VehicleCard from "../VehicleCard/VehicleCard";
import vehicles from "../../fakeData/vehicle";
import "./Home.css";

const Home = () => {
  return (
    <div className='home d-flex justify-content-center align-items-center'>
      <div className=" cardContainer row w-75 m-auto">
        {vehicles.map((vehicle) => (
          <VehicleCard vehicle={vehicle} key={vehicle.id}></VehicleCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
