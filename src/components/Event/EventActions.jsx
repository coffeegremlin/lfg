import React from 'react'

const EventActions = (props) => {
  console.log(props)
  const authorId = props.added_by?._id ? props.event.added_by._id : props.event.added_by
  const isAuthor = props.user?.profile === authorId


  return (
    isAuthor &&
    <div className='EventListings'>
      {!props.event.is_attending && <button onClick={() => props.markEventAttended(props.event._id)}>Attending</button>
      }

      <button onClick={() => props.handleDeletePost(props.post._id)}>Delete</button>
    </div >
  )
}




export default EventActions