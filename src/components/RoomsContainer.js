import React from 'react'
import RoomsFilter from "./RoomsFilter.js";
import RoomsList from "./RoomsList";
import {withRoomConsumer} from "../context"
import Loading from "./Loading"

function RoomsContainer({context}){
    const {loading, sortedRooms,rooms} = context
    if (loading){
        return <Loading />
    }

    return(
    <>
        <RoomsFilter rooms={rooms}/>
        <RoomsList rooms={sortedRooms}/>
    </>
    )
}



export default withRoomConsumer(RoomsContainer)













// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
// {
//     (value) => {
//         const {loading, sortedRooms,rooms} = value

//         if (loading){
//             return <Loading />
//         }

//         return (<div>
//             hello from  RoomsContainer
//             <RoomsFilter rooms={rooms}/>
//             <RoomsList rooms={sortedRooms}/>
//         </div>
//         )
//     }
// }


//         </RoomConsumer>
//     )
// }
