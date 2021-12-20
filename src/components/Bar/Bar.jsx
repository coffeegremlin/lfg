import React, { useState } from 'react';
import { Timeline } from 'react-twitter-widgets';
import { searchBar } from '../../services/apiService';
import './Bar.css'

const Bar = () => {
  const [ formData, setFormData] = useState({query: ""})
  const [ results, setResults] = useState([])

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      searchBar(formData.query)
      .then(results => {
        setResults(results.businesses)
      })
      .catch(() => {
        console.log("go home you are drunk")
      })
    } catch (err) {
      console.log(err)
    }
  }
  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value
    })
  }

  const { queryBar } = formData

  if (results === null) {
    return(
      <div>Well, looks you're staying in. We couldn't find any bars for you. Maybe try changing your search a bit?</div>
    )
  } else {
    return (
      <>
        <div>
        <h2 className='bar-header'>Where are we thinking of having a drink?</h2>
        <form className='search-form'
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div class="tb">
          <div class="td">
            <input className='city-input'
          placeholder="City, State"
          type="text" 
          value={queryBar}
          name="query"
          onChange={handleChange}
          /></div>
          <div class="td" id="s-cover">
          <button className='bar-search'><div id="s-circle"></div>
         <span></span>
        </button>
      </div>
    </div>
  </form>
        <div className='top-half'>
          {results.length ? 
            <>
            <div className="bar-cards daddy">
              {results.map((bar, idx) =>
              <div className="card-child" key={bar._id}>
                <div className="card-header">
                  <img id="bar-img" src={bar.image_url} alt="bar"/>
                </div>
                {bar.name && 
                <h3 className="card-header">{bar.name}
                </h3>}
                <p>{bar.address}</p>
                <p>{bar.phone}</p>
                <p>Rating: {bar.rating}</p> 
              </div>
              )}
            </div>
            </>
            :
            <h3></h3>
          }
        </div>
        {/* Add in twitter timelines for bar places on righthand side. */}
        <div className='twitter-feed'>
        <Timeline
          dataSource={{
            sourceType: 'https://twitter.com/DrunkenMoogle?s=20',
            screenName: 'DrunkenMoogle'
          }}
          options={{
            height: '900',
            width: '900'
          }}
        />
        </div></div>
      </>
    )
  }
}

export default Bar