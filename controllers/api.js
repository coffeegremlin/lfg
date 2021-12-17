import axios from "axios";


// just stubbing up functions atm
function search(req, res) {
  console.log(req.params.query)
  axios.get(`https://api.yelp.com/v3/businesses/search?term=${req.params.query}&location=baltimore&limit=10`, {
    headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
    }
  })
  .then(response => res.json(response.data))
}

function searchStores(req, res) {
  console.log("heeheehee")

  
}

function searchBars(req, res) {
  console.log("hoohoohoo")

}


export {
  search,
  searchStores,
  searchBars,
}