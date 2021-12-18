async function searchRetail(query) {
  try {
    const res = await fetch(`api/retail/${query}`)
    const data = await res.json()
    console.log("search function result", data)
    return data
  } catch (err) {
    return console.log(err, "AHHHHHH")
  }
}

async function searchBar(query) {
  try {
    const res = await fetch(`api/bar/${query}`)
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
}