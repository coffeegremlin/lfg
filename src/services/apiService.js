function searchPlace(query) {
  return fetch(`api/api/${query}`)
  .then(res => res.json())
  .catch(err => console.log(err, "AHHHHHH"))
}

export {
  searchPlace,
}