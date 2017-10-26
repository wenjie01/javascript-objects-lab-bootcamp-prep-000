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

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object,key) {

}
