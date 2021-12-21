import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const EventForm = props => {
  const [eventData, setEventData] = useState({
    name: '',
    tournament:'',
    activity:'',
    info:'',
  })
}