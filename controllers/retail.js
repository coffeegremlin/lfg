import axios from "axios";

function index(req, res) {
  console.log("we gotta get a landing page for routes, right?")
}

function search(req, res) {
  console.log(req.params.query)
  axios.get(`https://api.yelp.com/v3/businesses/search?term=game_shop&location=${req.params.query}&limit=10`, {
    headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
    }
  })
  .then(response => res.json(response.data))
}



export {
  index,
  search,
}