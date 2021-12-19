import React, { useState } from 'react';
import { Timeline } from 'react-twitter-widgets';
import { searchRestaurant } from '../../services/apiService';
import './Restaurant.css'

const Restaurant = () => {
  const [ formData, setFormData] = useState({query: ""})
  const [ results, setResults] = useState([])

  const { queryRestaurant } = formData

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      searchRestaurant(formData.query)
      .then(results => {
        setResults(results.businesses)
      })
      .catch(() => {
        console.log("no food for you")
      })
    } catch (err) {
      console.log(err)
    }
  }
  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value
    })
  }


  if (results === null) {
    return(
      <div>Sorry, we couldn't find a good place to eat. Maybe change your search up a tad?</div>
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
          <div class="tb">
          <div class="td">
          <input className='city-input'
          placeholder="City, State"
          type="text" 
          value={queryRestaurant}
          name="query"
          onChange={handleChange}
          /></div>
          <div class="td" id="s-cover">
          <button className='restaurant-search'><div id="s-circle"></div>
          <span></span>
        </button>
      </div>
    </div>
  </form>
</div>
        <div>
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
                <p>{restaurant.rating}</p> 
              </div>
              )}
            </div>
            </>
            :
            <h3>To be filled in later?</h3>
          }
        </div>
        {/* Add in twitter timelines for restaurant places on righthand side. */}
        <Timeline
          dataSource={{
            sourceType: 'https://twitter.com/Grubhub?s=20',
            screenName: 'Grubhub'
          }}
          options={{
            height: '400',
            width: '400'
          }}
        />
        <Timeline
          dataSource={{
            sourceType: 'https://twitter.com/Eater?s=20',
            screenName: 'Eater'
          }}
          options={{
            height: '400',
            width: '400'
          }}
        />
        <Timeline
          dataSource={{
            sourceType: 'https://twitter.com/BingingWBabish?s=20',
            screenName: 'BingingWBabish'
          }}
          options={{
            height: '400',
            width: '400'
          }}
        />
      </>
    )
  }
}

export default Restaurant