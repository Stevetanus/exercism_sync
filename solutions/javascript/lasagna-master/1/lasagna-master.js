/// <reference path="./global.d.ts" />
// @ts-check

export function cookingStatus (num){
  if (typeof num === "undefined") return "You forgot to set the timer."
  if (num > 0) {
    return "Not done, please wait."
  } else if (num === 0) {
    return "Lasagna is done."
  }else {
    return;
  }
}

export function preparationTime(layers, minutes = 2) {
  return layers.length * minutes
}

export function quantities(layer) {
  let noodles_count = 0;
  let sauce_count = 0;
  for (let i = 0; i < layer.length; i++){
    if (layer[i] === "noodles") {
      noodles_count += 1;
    }
    if (layer[i] === "sauce") {
      sauce_count += 1;
    }
  }
  return {
    noodles: noodles_count * 50,
    sauce: sauce_count * 0.2
  }
}

export function addSecretIngredient(friendsList, myList){
  myList.push(friendsList[friendsList.length-1])
}

export function scaleRecipe(recipe, portions){
  let newRecipe = {}
  for (let key in recipe){
    newRecipe[key] = recipe[key] * portions / 2
  }
  return newRecipe
}