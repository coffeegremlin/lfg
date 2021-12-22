import { useState, useEffect } from 'react'
import EventForm from '../../components/Event/EventForm'
import * as eventService from '../../services/eventService.js'
import './Event.css'
import UpdateEvent from '../../components/Event/UpdateEvent'

import { getAllEvents, deleteEvent, updateEvent } from '../../services/eventService'

const Events = props => {
  const [events, setEvents] = useState([])
  const [selectedEvent, setSelectedEvent] = useState(null)

  const selectEventToUpdate = (event) => {
    console.log('hello')
    setSelectedEvent(event)
  }

  const handleDeleteEvent = async (eventId) => {
    console.log(eventId)
    try{
      await deleteEvent(eventId)
      setEvents(events.filter((event)=>event._id!==eventId))
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    const fetchAllEvents = async () => {
      const eventData = await getAllEvents()
      setEvents(eventData)
    }
    fetchAllEvents()
    return () => { setEvents([]) }
  }, [])


  return (
    
    <main>
      <h1>Create an Event</h1>
      <EventForm setEvents={setEvents} events={events} {...props} getAllEvents={eventService.getAllEvents} />
      {events.length ? 
        <>
          {events.map(event=>
          <div>
            <p className="user-name" key={event._id} state={event} to="/events">
            {event.name}<br></br>
            {event.scheduledActivities}<br></br>
            {event.address}<br></br>
            {event.date}<br></br>
            {event.info}<br></br>
            </p>

            <button onClick={()=>handleDeleteEvent(event._id)} >Delete</button>
            <button onClick={()=>selectEventToUpdate(event)} >Update</button>


          </div>
            
          )}
         {selectedEvent && 
           <UpdateEvent 
           selectedEvent={selectedEvent}
           setSelectedEvent={setSelectedEvent}
           setEvents={setEvents}
           events={events}
           />
         }
        </>
      :
        <p>No events yet</p>
      } 
    </main>
   
    

  )
}

export default Events
