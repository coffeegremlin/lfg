async function search() {
  try {
    const res = await fetch(`api/api/`)
    const data = await res.json()
    console.log("search function result", data)
    return data
  } catch (err) {
    return console.log(err, "AHHHHHH")
  }
}

export {
  search,
}