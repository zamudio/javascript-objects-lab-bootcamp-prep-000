var recipes = new Object()

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, {[key]: value})
}
/*
function updateObjectWithKeyAndValue(recipes, key, value) {
  var newRecipes = Object.assign({}, recipes)
  return newRecipes
}*/