import { useState } from 'react'
import EventForm from '../../components/Event/EventForm'
// import styles from './Event.css'

const Events = props => {
  const [events, setEvents] = useState([''])

  const updateEvent = evnt => {
    setEvents(evnt)
  }

  return (
    <main>
      <h1>Create an Event</h1>
      <p>{events}</p>
      <EventForm {...props} updateEvent={updateEvent} />
    </main>

  )
}

export default Events