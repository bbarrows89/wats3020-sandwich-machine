/* JavaScript for WATS 3020 Sandwich Machine Assignment */

// Gather data from the user using the prompt() command.

let breadOrder = prompt('What kind of bread would you like? (white, wheat, sourdough, rye)');

let meatOrder = prompt('What kind of meat would you like? (Ham, Turkey, Roast Beef, Pastrami - separate multiple meats with a comma.')

let toppingsOrder = prompt('What kind of toppings would you like? Please provide a comma separated list.')

let condimentsOrder = prompt('What kind of condiments would you like? Please provide a comma separated list.')

let prices = {
    sandwich: 5, // Base price for a sandwich is $5, includes bread
    meat: 1, // Each kind of meat on a sandwich costs $1
    topping: 0.5, // Each topping costs $0.50
    condiment: 0.25 // Each condiment costs $0.25
};

// Convert order information from Strings to Arrays.

let meatArray = meatOrder.split(',');
let toppingArray = toppingsOrder.split(',');
let condimentArray = condimentsOrder.split(',');

// Calculate price of item cost by getting the length of our array.
// i.e. number of toppings ordered, multiplied by price.
 
let meatCost = meatArray.length * prices.meat;
let toppingCost = toppingArray.length * prices.topping;
let condimentCost = condimentArray.length * prices.condiment;

// Combine the costs of each part of the sandwich to get the subtotal.
let subtotal = prices.sandwich + meatCost + toppingCost + condimentCost;

//  Calculate the tax owed using the waStateTaxRate.
let waStateTaxRate = 0.065;
let orderTax = subtotal * waStateTaxRate;

//  Calculate `totalPrice` by adding `subtotal` and `orderTax`.
let totalPrice = subtotal + orderTax;


//  Put order info into a Template literal.

let receiptTemplate = `
    <p>SANDWICH ORDER</p>
    <p>Bread: ${breadOrder}</p>
    <p>Meat: ${meatOrder}</p>
    <p>Toppings: ${toppingsOrder}</p>
    <p>Condiments: ${condimentsOrder}</p>
    <p>---------------------</p>
    <p class="text-right">Sandwich: $${prices.sandwich.toFixed(2)}</p>
    <p class="text-right">Meat: $${meatCost.toFixed(2)}</p>
    <p class="text-right">Toppings: $${toppingCost.toFixed(2)}</p>
    <p class="text-right">Condiments: $${condimentCost.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Subtotal: $${subtotal.toFixed(2)}</p>
    <p class="text-right">Tax: $${orderTax.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Total: $${totalPrice.toFixed(2)}</p>
`

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let receiptText = document.querySelector("#receipt-text");
receiptText.innerHTML = receiptTemplate;
