import React, {useState } from 'react'
import { search } from '../../services/apiService'

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState({
    // add a way to set query to clicked category based on nav choices/dropdown
  })

  const [searchLocation, setSearchLocation] = useState([])
  const [searchResults, setSearchResults] = useState([])

  const { queryTerm } = searchTerm
  const { locationTerm } = searchLocation

// add a search for each premade category
// eg: retailSearch, barSearch, etc.


  return(
    <>
      <div>

      </div>
    </>
  )
}