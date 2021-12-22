import { useState, useEffect } from 'react'
import * as eventService from  '../../services/eventService'

const UpdateEvent = (props) => {
  const [eventData, setEventData] = useState({
    name:'',
    scheduledActivities:'',
    address:'',
    date:'',
    info:'',
  })

  const handleUpdate = async (e) => {
    e.preventDefault()
    console.log(props.updateEvent)
    // props.updateEvent('')
    const updatedEvent = await eventService.updateEvent(props.selectedEvent._id, eventData)
    // props.setEvents([...props.events, updatedEvent])
    props.setEvents(props.events.map((event)=>(
      props.selectedEvent._id===event._id ? updatedEvent : event
    )))
    props.setSelectedEvent(null)
  }

  const handleChange = async (e) => {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value,
    })
  }
  useEffect(()=>{
    setEventData({
      name: props.selectedEvent.name,
      scheduledActivities:props.selectedEvent.scheduledActivities,
      address:props.selectedEvent.address,
      date:props.selectedEvent.date,
      info:props.selectedEvent.info,
    })
  },[props.selectedEvent])

  return(
    <form className="event-form" onSubmit={handleUpdate}>
      <div className="event-name">
      </div>

      <input
      type="text"
      required
      name="name"
      autoComplete='off'
      placeholder='Event Name'
      value={eventData.name}
      onChange={handleChange}
      />
      {/* sched activities */}
      <input
      type="text"
      required
      name="scheduledActivities"
      autoComplete='off'
      placeholder='Activity'
      value={eventData.scheduledActivities}
      onChange={handleChange}
      />
      {/* address */}
      <input
      type="text"
      required
      name="address"
      autoComplete='off'
      placeholder='Address'
      value={eventData.address}
      onChange={handleChange}
      />
      {/* date */}
      <input
      type="text"
      required
      name="date"
      autoComplete='off'
      placeholder='Date'
      value={eventData.date}
      onChange={handleChange}
      />
      {/* info */}
      <input
      type="text"
      required
      name="info"
      autoComplete='off'
      placeholder='Information'
      value={eventData.info}
      onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default UpdateEvent