import React, { useState } from 'react';
import { Timeline } from 'react-twitter-widgets';
import { searchBar } from '../../services/apiService';
import './Bar.css'

const Bar = () => {
  const [ formData, setFormData] = useState({query: ""})
  const [ results, setResults] = useState([])
  const [ status, setStatus ] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      setStatus(false)
      const results = await searchBar(formData.query)
      console.log(results)
      results.businesses 
        ? setResults(results.businesses) 
        : setStatus(true)
    } catch (err) {
      console.log(err)
      setStatus(true)
    }
  }
  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value
    })
  }

  const { queryBar } = formData

  if (status) {
    return(
      <div>
        <p>Well, looks you're staying in. We couldn't find any bars for you. Maybe try changing your search a bit?</p>
          <form className='search-form'
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div className="tb">
              <div className="td">
                <input className='city-input'
                placeholder="City, State"
                type="text" 
                value={queryBar}
                name="query"
                onChange={handleChange}
              />
              </div>
                <div className="td" id="s-cover">
                  <button className='bar-search'>
                    <div id="s-circle"></div>
                    <span></span>
                  </button>
                </div>
            </div>
          </form>
      </div>
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
            <div className="tb">
              <div className="td">
                <input className='city-input'
                  placeholder="City, State"
                  type="text" 
                  value={queryBar}
                  name="query"
                  onChange={handleChange}
                  />
              </div>
            <div className="td" id="s-cover">
              <button className='bar-search'>
                <div id="s-circle"></div>
                  <span></span>
              </button>
            </div>
            </div>
          </form>
        </div>

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
                <p>{bar.location.address1}</p>
                <p>{bar.location.city}, {bar.location.zip_code}</p>
                <p>Rating: {bar.rating}</p> 
                <p>Price: {bar.price}</p> 
              </div>
              )}
            </div>
            </>
            :
            <h3> </h3>
          }
        
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