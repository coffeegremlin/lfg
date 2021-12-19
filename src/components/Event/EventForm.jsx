import React from 'react'

const EventForm = (props) => {
  return(
    <form className="event-form" onSubmit={props.handleCreateEvent}>
      <div className="event-name">
        <label>Create an Event</label>
      </div>

      <input
      type="text"
      required
      name="eventName"
      autoComplete='off'
      placeholder='Event Name'
      value={props.event}
      onChange={(e) => props.setEvent(e.target.value)}
      />
      {/* tournament input */}
      <input
      type="text"
      required
      name="isTournament"
      autoComplete='off'
      placeholder='yes/no'
      value={props.event}
      onChange={(e) => props.setEvent(e.target.value)}
      />
      {/* sched activities */}
      <input
      type="text"
      required
      name="eventActivities"
      autoComplete='off'
      placeholder='activity'
      value={props.event}
      onChange={(e) => props.setEvent(e.target.value)}
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