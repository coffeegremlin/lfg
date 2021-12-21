import React, { useState } from 'react';
import { Timeline } from 'react-twitter-widgets';
import { searchRestaurant } from '../../services/apiService';
import './Restaurant.css'

const Restaurant = () => {
  const [ formData, setFormData] = useState({query: ""})
  const [ results, setResults] = useState([])
  const [ status, setStatus ] = useState(false)

  const { queryRestaurant } = formData

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      setStatus(false)
      const results = await searchRestaurant(formData.query)
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


  if (status) {
    return(
      <div>
        <p>Sorry, we couldn't find a good place to eat. Maybe change your search up a tad?</p>
          <form className='search-form'
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div className="tb">
              <div className="td">
                <input className='city-input'
                placeholder="City, State"
                type="text" 
                value={queryRestaurant}
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
        <h2 className='res-header'>What kind of food are we in the mood for?</h2>
        <form className='search-form'
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div className="tb">
          <div className="td">
          <input className='city-input'
          placeholder="City, State"
          type="text" 
          value={queryRestaurant}
          name="query"
          onChange={handleChange}
          /></div>
          <div className="td" id="s-cover">
          <button className='restaurant-search'><div id="s-circle"></div>
          <span></span>
        </button>
      </div>
    </div>
  </form>
</div>
        <div className='top-half'>
          {results.length ? 
            <>
            <div className="res-cards daddy">
              {results.map((restaurant, idx) =>
              <div className="card-child" key={restaurant._id}>
                <div className="card-header">
                  <img id="restaurant-img" src={restaurant.image_url} alt="restaurant"/>
                </div>
                {restaurant.name && 
                <h3 className="card-header">{restaurant.name}
                </h3>}
                <p>{restaurant.address}</p>
                <p>{restaurant.phone}</p>
                <p>{restaurant.location.address1}</p>
                <p>{restaurant.location.city}, {restaurant.location.zip_code}</p>
                <p>{restaurant.rating}</p> 
              </div>
              )}
            </div>
            </>
            :
            <h3></h3>
          }
        
        {/* Add in twitter timelines for restaurant places on righthand side. */}
        <div className='twitter-feed'>
        <Timeline
          dataSource={{
            sourceType: 'https://twitter.com/Grubhub?s=20',
            screenName: 'Grubhub'
          }}
          options={{
            height: '500',
            width: '500'
          }}
        />
        <Timeline
          dataSource={{
            sourceType: 'https://twitter.com/Eater?s=20',
            screenName: 'Eater'
          }}
          options={{
            height: '500',
            width: '500'
          }}
        />
        <Timeline
          dataSource={{
            sourceType: 'https://twitter.com/BingingWBabish?s=20',
            screenName: 'BingingWBabish'
          }}
          options={{
            height: '500',
            width: '500'
          }} 
        />
        </div></div>
      </>
    )
  }
}

export default Restaurant