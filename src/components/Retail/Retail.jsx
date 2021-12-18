import React, { useState } from "react";
import { search } from "../../services/apiService"

const Retail = () => {
  const [ formData, setFormData ] = useState({
    query: ""
  })
  const [ results, setResults ] = useState([])

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      search(formData.query)
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
        <h2>Where can I buy a game around here?</h2>
        <form 
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <input 
          placeholder="City, State"
          type="text" 
          value="query" 
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
      </div>
      </>
    )
  }

  }


export default Retail