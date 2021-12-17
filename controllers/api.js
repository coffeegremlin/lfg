import axios from "axios";


// just stubbing up functions atm
function searchStores(req, res) {
  console.log("haahaahaa")
  // have to figure out how to set location to start search
  // can have users set location from landing and then use search terms to find bars, restaurants, shops, and event spaces
  // or can have set functions for each search (with terms hard-coded) and users search by location
  // either way should we limit results to like top 10?

  
}

function searchRestaurants(req, res) {
  console.log("heeheehee")

  
}

function searchBars(req, res) {
  console.log("hoohoohoo")

}


export {
  searchStores,
  searchRestaurants,
  searchBars,
}