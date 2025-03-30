let calculation = localStorage.getItem('calculation') || '0';

document.querySelector('.js-paragrah').innerHTML = calculation;

function updateCalculation(value) {
  calculation += value;
  localStorage.setItem('calculation', calculation);
  
  console.log(calculation);
  document.querySelector('.js-paragrah').innerHTML = calculation;
}

// Optional: you can also create a function in order
// to reuse this code.
function saveCalculation() {
  localStorage.setItem('calculation', calculation);
}