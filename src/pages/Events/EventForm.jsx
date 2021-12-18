import React from 'react'

const EventForm = (props) => {
  return(
    <form className="event-form" onSubmit={props.handCreateEvent}>
      <div className="event-name">
        <label>Create an Event</label>
      </div>

      <input
      type="text"
      required
      name="event"
      autoComplete='off'
      placeholder='Event'
      value={props.event}
      onChange={(e) => props.setEvent(e.target.value)}
      />
    </form>
  )
}

export default EventForm


