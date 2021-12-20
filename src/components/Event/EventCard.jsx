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


export default EventCard