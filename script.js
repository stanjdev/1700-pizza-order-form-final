import { calculateAreaOfCircle } from './helpers.js';

const nameDisplay = document.querySelector('#name-display');
const diameterDisplay = document.querySelector('#diameter-display');
const costDisplay = document.querySelector('#cost-display');
const diameterRange = document.querySelector('#diameter');
const toppingSelector = document.querySelector('#toppings');
const circle = document.querySelector('#circle');
const vegetarianDisplay = document.querySelector('#vegetarian-display');

const PIZZAS = {
  'cheese': {
    price: 0.05,
    img: './images/cheese.jpeg'
  },
  'pepperoni': {
    price: 0.08,
    img: './images/pepperoni.jpeg'
  },
  'sausage': {
    price: 0.08,
    img: './images/sausage.jpeg'
  },
  'onion': {
    price: 0.08,
    img: './images/onions.jpeg'
  },
  'tomato': {
    price: 0.08,
    img: './images/tomatoes.jpeg'
  },
};


document.body.addEventListener("input", (evt) => {
  const id = evt.target.id;
  const value = evt.target.value;
  const diameter = parseInt(diameterRange.value);
  const area = calculateAreaOfCircle(diameter);

  if (id === "name") {
    nameDisplay.innerHTML = `Name: ${value}`;
  } else if (id === "diameter") {
    diameterDisplay.innerHTML = `Diameter: ${value} in`;
    costDisplay.innerHTML = `Cost: ${calculateCost(area, toppingSelector.value, vegetarian.checked)}`;
    circle.style.height = diameter * 2 + "px";
    circle.style.width = diameter * 2 + "px";
    circle.style.borderRadius = '100%';
  } else if (id === "toppings") {
    costDisplay.innerHTML = `Cost: ${calculateCost(area, value, vegetarian.checked)}`;
    circle.style.backgroundImage = `url('${PIZZAS[value].img}')`;
  } else if(id === 'vegetarian') {
    costDisplay.innerHTML = `Cost: ${calculateCost(area, toppingSelector.value, vegetarian.checked)}`;
  }
  
  // Vegetarian checker
  if (vegetarian.checked) {
    circle.style.border = "solid green 4px";
    vegetarianDisplay.style.color = "green";
    vegetarianDisplay.innerHTML = "*Pizza will be vegetarian";
  } else {
    circle.style.border = "none";
    vegetarianDisplay.innerHTML = "";
  }
});

const calculateCost = (area, topping, isVegetarian) => {
  return `$${((parseFloat(PIZZAS[topping].price) + (isVegetarian ? 0.01 : 0)) * area).toFixed(2)}`;
};