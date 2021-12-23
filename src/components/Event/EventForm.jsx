import { useState } from 'react'
import * as eventService from  '../../services/eventService'

const EventForm = (props) => {
  const [eventData, setEventData] = useState({
    name: '',
    scheduledActivities:'',
    address:'',
    date:'',
    info:'',
  })

  const handleUpdate = (e) => {
    console.log(props.updateEvent)
    // props.updateEvent('')
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(eventData)
    // props.handleUpdate(eventData)
    const newEvent = await eventService.createEvent(eventData)
    props.setEvents([...props.events, newEvent])
  }

  return(
    <form className="event-form" onSubmit={handleSubmit}>
      <div className="event-name">
      </div>

      <input
      type="text"
      required
      name="name"
      autoComplete='off'
      placeholder='Event Name'
      value={eventData.name}
      onChange={handleUpdate}
      />
      {/* sched activities */}
      <input
      type="text"
      required
      name="scheduledActivities"
      autoComplete='off'
      placeholder='Activity'
      value={eventData.scheduledActivities}
      onChange={handleUpdate}
      />
      {/* address */}
      <input
      type="text"
      required
      name="address"
      autoComplete='off'
      placeholder='Address'
      value={eventData.address}
      onChange={handleUpdate}
      />
      {/* date */}
      <input
      type="text"
      required
      name="date"
      autoComplete='off'
      placeholder='Date'
      value={eventData.date}
      onChange={handleUpdate}
      />
      {/* info */}
      <input
      type="text"
      required
      name="info"
      autoComplete='off'
      placeholder='Information'
      value={eventData.info}
      onChange={handleUpdate}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default EventForm