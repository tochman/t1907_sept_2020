const button = document.getElementById('calculate')
const weightInput = document.getElementById('weight')
const heightInput = document.getElementById('height')
const resultsNode = document.getElementById('results')


button.addEventListener('click', function() {
  // debugger
  let bmiResults = BMICalculator.calculatMetric(weightInput.value, heightInput.value)
  resultsNode.innerHTML = `<h2>Your BMI value is ${bmiResults.value.toFixed(2)}
  And you are considered ${bmiResults.display.message}</h2>`
  resultsNode.style.color = bmiResults.display.color
})