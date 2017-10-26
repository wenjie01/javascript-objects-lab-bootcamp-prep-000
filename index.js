var recipes = {
  water: '1 cup',
  egg: 3,
  flour: '2 cup',
  butter: '50 g',
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
  return object
}