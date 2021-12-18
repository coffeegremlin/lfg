import React, { useState } from "react";
import { Timeline } from "react-twitter-widgets";
import { searchRetail } from "../../services/apiService"

const Retail = () => {
  const [ formData, setFormData ] = useState({query: ""})
  const [ results, setResults ] = useState([])

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      searchRetail(formData.query)
      .then(results => {
        setResults(results.limit) //is this the field we're using?
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

  const { queryRetail } = formData

  if (results === null) {
    return <div>Uh oh, we didn't find anything. Maybe try changing up the search terms a little?</div>
  } else {
    return (
      <>
      <div>
        <h2>Where can I buy a game around here?</h2>
        <form 
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <input 
          placeholder="City, State"
          type="text" 
          value={queryRetail}
          name="query"
          onChange={handleChange}
          />
          <button>Let's find out!</button>
        </form>
        <div>
          {results.length ? 
            <>
            <div className="retail-cards daddy">
              {results.map((retail, idx) =>
              <div className="card child" key={retail._id}>
                <div className="card-header">
                  <img id="retail-img" src={retail.image_url} alt="shop"/>
                </div>
                {retail.name && 
                <h3 className="card-header">{retail.name}
                </h3>}
                <p>{retail.address}</p>
                <p>{retail.phone}</p>
                <p>{retail.rating}</p> 
              </div>
              )}
            </div>
            </>
            :
            <h3>A little stringilymingiler here idk what yet</h3>
          }
        </div>
        {/* Add in twitter timelines for retail places on righthand side. like gamestop, newegg, polygon, warhammer, etc. */}
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
      </div>
      </>
    )
  }

  }


export default Retail