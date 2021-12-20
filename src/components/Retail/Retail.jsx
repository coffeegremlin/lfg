import React, { useState } from "react";
import { Timeline } from "react-twitter-widgets";
import { searchRetail } from "../../services/apiService"
import "./Retail.css"

const Retail = () => {
  const [ formData, setFormData ] = useState({query: ""})
  const [ results, setResults ] = useState([])

  const { queryRetail } = formData

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      searchRetail(formData.query)
      .then(results => {
        setResults(results.businesses) //is this the field we're using?
      })
      .catch(() => {
        console.log("uh oh")
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
    return <div>Uh oh, we didn't find anything. Maybe try changing up the search terms a little?</div>
  } else {
    return (
      <>
      <div>
        <h2 className='retail-header'>Where can I buy a game around here?</h2>
        <form className='search-form'
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div class="tb">
          <div class="td">
          <input className='city-input'
          placeholder="City, State"
          type="text" 
          value={queryRetail}
          name="query"
          onChange={handleChange}
          /></div>
          <div class="td" id="s-cover">
          <button className='retail-search'><div id="s-circle"></div>
           <span></span>
        </button>
      </div>
    </div>
  </form>
        <div className='top-half'>
          {results.length ? 
            <>
            <div className="retail-cards daddy">
              {results.map((retail, idx) =>
              <div className="card-child" key={retail._id}>
                <div className="card-header">
                  <img id="retail-img" src={retail.image_url} alt="shop"/>
                </div>
                {retail.name && 
                <h3 className="card-header">{retail.name}
                </h3>}
                <p>{retail.address}</p>
                <p>{retail.phone}</p>
                <p>Rating: {retail.rating}</p> 
              </div>
              )}
            </div>
            </>
            :
            <h3></h3>
          }
        </div>
        {/* Add in twitter timelines for retail places on righthand side. like gamestop, newegg, polygon, warhammer, etc. */}
        <div className='twitter-feed'>
        <Timeline
          dataSource={{
            sourceType: 'https://twitter.com/IGN?s=20',
            screenName: 'IGN'
          }}
          options={{
            height: '400',
            width: '400'
          }}
        />
        <Timeline
          dataSource={{
            sourceType: 'https://twitter.com/Polygon?s=20',
            screenName: 'Polygon'
          }}
          options={{
            height: '400',
            width: '400'
          }}
        />
        <Timeline
          dataSource={{
            sourceType: 'https://twitter.com/HardDriveMag?s=20',
            screenName: 'HardDriveMag'
          }}
          options={{
            height: '400',
            width: '400'
          }}
        />
         </div></div>
      </>
      )
    }
  }


export default Retail