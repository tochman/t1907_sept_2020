const button = document.getElementById('calculate')
const weightInput = document.getElementById('weight')
const heightInput = document.getElementById('height')
const resultsNode = document.getElementById('results')
const selectorNode = document.getElementById('method')
let method = 'metric'

const calculateBmi = () => {
  let bmiResults
  if (method === 'metric') {
    bmiResults = BMICalculator.calculatMetric(weightInput.value, heightInput.value)
  } else {
    bmiResults = BMICalculator.calculateImperial(weightInput.value, heightInput.value)
  }
  resultsNode.innerHTML = `<h2>Your BMI value is ${bmiResults.value.toFixed(2)}
  And you are considered ${bmiResults.display.message}</h2>`
  resultsNode.style.color = bmiResults.display.color
}

button.addEventListener('click', () => {
  calculateBmi()
})

selectorNode.addEventListener('change', () => {
  method = selectorNode.options[selectorNode.selectedIndex].value
  if (method === 'imperial') {
    weightInput.placeholder = weightInput.placeholder.replace('kilograms', 'pounds')
    heightInput.placeholder = heightInput.placeholder.replace('centimeters', 'inches')
  } else {
    weightInput.placeholder = weightInput.placeholder.replace('pounds', 'kilograms')
    heightInput.placeholder = heightInput.placeholder.replace('inches', 'centimeters')
  }
  // debugger
})