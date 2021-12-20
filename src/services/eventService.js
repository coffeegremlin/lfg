import * as tokenService from './tokenService'
const BASE_URL = '/api/events/'

export const getAllEvents = async () => {
  try {
    const res = await fetch(`${BASE_URL}`)
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const createEvent = async (Event) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(Event)
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const updateEvent = async (EventId) => {
  try {
    const res = await fetch(`${BASE_URL}${EventId}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const deleteEvent = async (EventId) => {
  try {
    await fetch(`${BASE_URL}${EventId}`, {
      method: 'DELETE',
      headers: { 'Authorization': 'Bearer ' + tokenService.getToken() }
    })
  } catch (error) {
    throw error
  }
}

export const getEventById = async (EventId) => {
  try {
    const res = await fetch(`${BASE_URL}${EventId}`)
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

