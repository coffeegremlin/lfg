import React, { useState } from 'react'
import EventForm from './EventForm'

import { createEvent } from '../../services/eventService'

const CreateEvent = (props) => {
  const navigate = useNavigate()
  const [eventName, setEventName] = useState('')
  const [tournament, setTournament] = useState('')
  const [activity, setActivity] = useState('')
  const [info, setInfo] = useState('')


  const eventData = {
    name: eventName,
    tournament: tournament,
    activity: activity,
    info: info,
    added_by: props.user.profile
  }

  const handleCreateEvent = async (e) => {
    e.preventDefault()
    try {
      const newEvent = await createEvent(eventData)
      console.log('New Event Data: ', newEvent)
      navigate('/event')
    } catch (error) {
      throw error
    }
  }

  return (
    <div className="layout">
      <Header title='Create Event' />
      <EventForm
        name={eventName}
        setEventName={setEventName}

        tournament={tournament}
        setTournament={setTournament}

        activity={activity}
        setActivity={setActivity}

        info={info}
        setInfo={setInfo}

        handleCreateEvent={handleCreateEvent}
      />
    </div>
  )


}



export default createEvent