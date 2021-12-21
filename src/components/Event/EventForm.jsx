import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const EventForm = props => {
  const [eventData, setEventData] = useState({
    name: '',
    tournament:'',
    activity:'',
    info:'',
  })

  const handleChange = e => {
    props.updateEvent('')
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value,
    })
  }

  // const handleSubmit = async e => {
  //   e.preventDefault()
  //   try {
  //    const eventSubmit = await 
  //   }
  // }

  const { name, tournament, activity, info } = eventData

  return(
    <form className="event-form" onSubmit={props.handleCreateEvent}>
      <div className="event-name">
      </div>

      <input
      type="text"
      required
      name="eventName"
      autoComplete='off'
      placeholder='Event Name'
      value={props.event}
      />
      {/* tournament input */}
      <input
      type="text"
      required
      name="isTournament"
      autoComplete='off'
      placeholder='Tournament'
      value={props.event}
      />
      {/* sched activities */}
      <input
      type="text"
      required
      name="eventActivities"
      autoComplete='off'
      placeholder='Activity'
      value={props.event}
      />
      {/* address */}
      <input
      type="text"
      required
      name="eventAddress"
      autoComplete='off'
      placeholder='address'
      value={props.event}
      onChange={(e) => props.setEvent(e.target.value)}
      />
      {/* date */}
      <input
      type="text"
      required
      name="eventDate"
      autoComplete='off'
      placeholder='date'
      value={props.event}
      onChange={(e) => props.setEvent(e.target.value)}
      />
      {/* info */}
      <input
      type="text"
      required
      name="eventInfo"
      autoComplete='off'
      placeholder='information'
      value={props.event}
      onChange={(e) => props.setEvent(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  )

}

export default EventForm