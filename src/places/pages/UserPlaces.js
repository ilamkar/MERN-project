import React from 'react'

import PlaceList from '../components/PlaceList';



const DUMMY_PLACES=[
    {
        id:'p1',
        title:'Empire State Building',
        description:"Open of the mist famous sky",
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg",
        address:'20 W 34th St, New York, NY 10001',
        location:{
            lat:40.7484405,
            lng:-73.987584
        },
        creator:'u100'
    },
    {
        id:'p2',
        title:'Empire State Building',
        description:"Open of the mist famous sky",
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg",
        address:'20 W 34th St, New York, NY 10001',
        location:{
            lat:40.7484405,
            lng:-73.987584
        },
        creator:'u2'
    }
]


const UserPlace= ()=>{
    return <PlaceList items={DUMMY_PLACES}/>;

}


export default UserPlace;