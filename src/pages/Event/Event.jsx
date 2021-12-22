import { useState, useEffect } from 'react'
import EventForm from '../../components/Event/EventForm'
import * as eventService from '../../services/eventService.js'
// import styles from './Event.css'

import { getAllEvents, deleteEvent } from '../../services/eventService'

const Events = props => {
  const [events, setEvents] = useState([])

  const updateEvent = evnt => {
    setEvents(evnt)
  }

  const handleDeleteEvent = async (eventId) => {
    try{
      await deleteEvent(eventId)
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
            <p class="user-name" key={event._id} state={event} to="/events">{event.name}</p>
          </div>
            
          )}
        
        </>
      :
        <p>No events yet</p>
      } 
    </main>

  )
}

export default Events

// new component that has all events in here
// store events in here (have access everything (compone/form))
//handleDelete
