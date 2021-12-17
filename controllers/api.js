import axios from "axios";


// just stubbing up functions atm
function searchRestaurants(req, res) {
  console.log(req.params.query)
  axios.get(`https://api.yelp.com/v3/businesses/search?term=nandos&location=baltimore`, {
    headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
    }
  })
  .then(apiResponse => res.json(apiResponse.data))
  // have to figure out how to set location to start search
  // can have users set location from landing and then use search terms to find bars, restaurants, shops, and event spaces
  // or can have set functions for each search (with terms hard-coded) and users search by location
  // hard-code specific terms for specific places (tabletop/videogame/sport?)
  // either way should we limit results to like top 10?

  
}

function searchStores(req, res) {
  console.log("heeheehee")

  
}

function searchBars(req, res) {
  console.log("hoohoohoo")

}


export {
  searchRestaurants,
  searchStores,
  searchBars,
}