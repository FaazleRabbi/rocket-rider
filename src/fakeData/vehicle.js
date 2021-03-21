const vehicle = [
    {
        VehicleName:'bike',
        photoUrl:'images/bike.png',
        vehicleId: 1,
        bike : [
            {
                id:1,
                VehicleName:'bike',
                passenger : 1,
                type:'normal',
                photoUrl:'images/bike.png',
                cost: 57
            },
            {
                VehicleName:'bike',
                id:2,
                passenger : 2,
                type:'luxury',
                photoUrl:'images/bike.png',
                cost: 95
            }
        ]
    },
    {
        VehicleName:'bus',
        photoUrl:'images/bus.png',
        vehicleId:2,
        bus:[
            {
                VehicleName:'bus',
                id:1,
                passenger : 2,
                type:'luxury',
                cost: 50
            },
            {
                VehicleName:'bus',
                id:2,
                passenger : 5,
                type:'luxury',
                cost: 40
            },
            {
                VehicleName:'bus',
                id:3,
                passenger : 10,
                type:'luxury',
                cost: 30
            },
            {
                VehicleName:'bus',
                id:4,
                passenger : 20,
                type:'normal',
                cost: 20
            }
        ]
    },
    {
        VehicleName:'car',
        photoUrl:'images/car.png',
        vehicleId:3,
        car:[
            {
                VehicleName:'car',
                id:1,
                passenger : 1,
                type:'luxury',
                cost: 50
            },
            {
                VehicleName:'car',
                id:2,
                passenger : 2,
                type:'luxury',
                cost: 40
            },
            {
                VehicleName:'car',
                id:3,
                passenger : 3,
                type:'luxury',
                cost: 30
            },
            {
                VehicleName:'car',
                id:4,
                passenger : 4,
                type:'normal',
                cost: 20
            }
        ]
    },
    {
        VehicleName:'train',
        photoUrl:'images/train.png',
        vehicleId:4,
        train:[
            {
                VehicleName:'train',
                id:1,
                passenger : 45,
                type:'luxury',
                cost: 50
            },
            {
                VehicleName:'train',
                id:2,
                passenger : 33,
                type:'luxury',
                cost: 40
            },
            {
                VehicleName:'train',
                id:3,
                passenger : 22,
                type:'luxury',
                cost: 30
            },
            {
                VehicleName:'train',
                id:4,
                passenger : 11,
                type:'normal',
                cost: 20
            }  
        ]
    },

]
export default vehicle;