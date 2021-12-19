import * as tokenService from "../services/tokenService"

async function searchRetail(query) {
  try {
    const res = await fetch(`api/retail/${query}`, {
      headers: {
        "Authorization": `Bearer ${tokenService.getToken()}`
      }
    })
    const data = await res.json()
    console.log("search function result", data)
    return data
  } catch (err) {
    return console.log(err, "AHHHHHH")
  }
}

async function searchBar(query) {
  try {
    const res = await fetch(`api/bar/${query}`, {
      headers: {
        "Authorization": `Bearer ${tokenService.getToken()}`
      }
    })
    const data = await res.json()
    console.log("search function result", data)
    return data
  } catch (err) {
    return console.log(err, "AHHHHHH")
  }
}

async function searchRestaurant(query) {
  try {
    const res = await fetch(`api/restaurant/${query}`, {
      headers: {
        "Authorization": `Bearer ${tokenService.getToken()}`
      }
    })
    const data = await res.json()
    console.log("search function result", data)
    return data
  } catch (err) {
    return console.log(err, "AHHHHHH")
  }
}

export {
  searchRetail,
  searchBar,
  searchRestaurant,
}