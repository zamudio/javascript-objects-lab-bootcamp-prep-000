var recipes = new Object()

function updateObjectWithKeyAndValue(recipes, key, value) {
  var newRecipes = Object.assign({}, recipes, {[key]: value})
  return newRecipes
}
/*
function updateObjectWithKeyAndValue(recipes, key, value) {
  var newRecipes = Object.assign({}, recipes)
  return newRecipes
}*/