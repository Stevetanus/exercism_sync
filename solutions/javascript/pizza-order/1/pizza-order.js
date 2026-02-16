/// <reference path="./global.d.ts" />
//
// @ts-check

const PizzaPrice = {
  Margherita: 7,
  Caprese: 9,
  Formaggio: 10,
  ExtraSauce: 1,
  ExtraToppings: 2,
}

/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */

export function pizzaPrice(pizza, ...extras) {
  if (!pizza) return 0;

  if (!extras.length) {
    return PizzaPrice[pizza];
  } else {
    let extra = extras.shift();
    return PizzaPrice[extra] + pizzaPrice(pizza, ...extras);
  }
}

/**
 * Calculate the prize of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */

export function orderPrice(pizzaOrders) {
  if (!pizzaOrders.length) return 0;
  return pizzaOrders.reduce((accu, curr) => 
    accu + pizzaPrice(curr.pizza, ...curr.extras), 0)
}
