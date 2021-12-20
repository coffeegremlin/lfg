import React, { useState } from "react";
import { getAllEvents } from "../services/eventService"
import EventForm from '../../pages/CreateEvent/EventForm'

const EventCard = () => {
  const [eventData, SetEventData] = useState([])
  return (
    <>
    <div>
      <EventForm />

      {/* format for event listed goes here  */}
      <div className="event-container">
        {/* {props.event.tournament &&
          <Tournaments tournament={props.event.tournamentName} />
        } */}
      </div>
      {/* conditional logic to add section that shows event  */}

    </div>
    </>
  )
}





// const Event= (props) => {
//   console.log(props)
//   const authorId = props.added_by?._id ? props.event.added_by._id : props.event.added_by
//   const isAuthor = props.user?.profile === authorId


//   return (
//     isAuthor &&
//     <div className='EventListings'>
//       {!props.event.is_attending && <button onClick={() => props.markEventAttended(props.event._id)}>Attending</button>
//       }

//       <button onClick={() => props.handleDeleteEvent(props.event._id)}>Delete</button>
//     </div >
//   )
// }


export default EventCard