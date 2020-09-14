const BMICalculator = {
  calculatMetric(weight, height) {
    let result = parseInt(weight) / ((parseInt(height) / 100) * (parseInt(height) / 100))
    return {
      value: result,
      display: this.checkResult(result)
    }
  },
  checkResult(bmiValue) {
      if (bmiValue <= 18.5) {
      display.message = 'underweight'
      display.color = 'red'
    } else if (bmiValue >= 18.6 && bmiValue <= 24.9) {
      display.message = 'normal'
      display.color = 'green'
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      display.message = 'overweight'
      display.color = 'darkgreen'
    } else if (bmiValue >= 30) {
      display.message = 'obese'
      display.color = 'red'
    }
    return display
  }
}