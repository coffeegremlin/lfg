import { Event } from '../models/event.js'

function create(req, res) {
  Event.create(req.body)
  .then(event => res.status(201).json(event))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function index(req, res) {
  Event.find({})
  .then(events => res.status(200).json(events))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function show(req, res) {
  Event.findById(req.params.id)
  .then(event => res.status(200).json(event))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function update(req, res) {
  Event.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(event => res.status(200).json(event))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function deleteEvent(req, res) {
  Event.findByIdAndDelete(req.params.id)
  .then(event => res.status(204).end())
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

export {
  create,
  index,
  show,
  update,
  deleteEvent as delete
}