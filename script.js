const nameDisplay = document.querySelector('#name-display');
const diameterDisplay = document.querySelector('#diameter-display');
const costDisplay = document.querySelector('#cost-display');
const diameterRange = document.querySelector('#diameter');
const toppingSelector = document.querySelector('#toppings');
const circle = document.querySelector('#circle');

const COSTS = {
  'cheese': 0.25,
  'pepperoni': 0.33,
  'sausage': 0.33,
  'onion': 0.33,
  'tomato': 0.33,
};

document.body.addEventListener("input", (evt) => {
  const id = evt.target.id;
  const value = evt.target.value;
  const diameter = parseInt(diameterRange.value);
  if (id === "name") {
    nameDisplay.innerHTML = `Name: ${value}`;
  } else if (id === "diameter") {
    diameterDisplay.innerHTML = `Diameter: ${value} in`;
    costDisplay.innerHTML = `Cost: ${calculateCost(value, toppingSelector.value)}`;

    // let area = calculateAreaOfCircle(diameter);

    circle.style.height = diameter * 2 + "px";
    circle.style.width = diameter * 2 + "px";
    circle.style.backgroundColor = 'maroon';
    circle.style.borderRadius = '50%';

  } else if (id === "toppings") {
    costDisplay.innerHTML = `Cost: ${calculateCost(diameter, value)}`;
  }

});

const calculateCost = (inches, topping) => {
  return `$${(COSTS[topping] * inches).toFixed(2)}`;
};

const calculateAreaOfCircle = (diameter) => {
  let radius = diameter / 2;
  return Math.PI * radius * radius;
};