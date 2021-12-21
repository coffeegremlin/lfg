import React, { useState } from 'react'
import EventForm from '../../components/Event/EventForm'
import { useNavigate } from 'react-router-dom'
import { createEvent } from '../../services/eventService'

const CreateEvent = (props) => {
  const navigate = useNavigate() 
  const [eventData, setEventData] = useState({
    name: '',
    tournament:'',
    activity:'',
    info:'',
    added_by: props.user.profile
  })

  const handleCreateEvent = async (e) => {
    e.preventDefault()
    try{
      const newEvent = await createEvent(eventData)
      console.log('New Event Data: ', newEvent)
      navigate('/events')
    } catch (error) {
      throw error
    }
  }

  return (
    <div>
      <EventForm
        eventData={eventData}
        setEventData={setEventData}

        handleCreateEvent={handleCreateEvent}
      />
    </div>
  )
}

export default CreateEvent