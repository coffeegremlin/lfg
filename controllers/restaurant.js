import axios from "axios";

function search(req, res) {
  console.log(req.params.query)
  console.log(process.env.API_KEY)
  axios.get(`https://api.yelp.com/v3/businesses/search?term=restaurant&location=${req.params.query}&limit=10`, {
    headers: {
      'Authorization': `Bearer ${process.env.API_KEY}`
    }
  })
  .then(response => res.json(response.data))
  .catch(err => {
    res.status(500).json(err)
  })
}



export {
  search,
}