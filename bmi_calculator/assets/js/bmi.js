const BMICalculator = {
  calculatMetric(weight, height) {
    let result = parseInt(weight) / ((parseInt(height) / 100) * (parseInt(height) / 100))
    return {
      value: result,
      display: this.checkResult(result)
    }
  },
  calculateImperial(weight, height) {
    let result = (parseInt(weight) * 703) / (parseInt(height) * parseInt(height))
    return {
      value: result,
      display: this.checkResult(result)
    }
  },
  checkResult(bmiValue) {
    switch (true) {
      case (bmiValue <= 18.5):
        return (
          {
            message: 'underweight',
            color: 'red'
          }
        )
      case (bmiValue < 25):
        return (
          {
            message: 'normal',
            color: 'green'
          }
        )
      case (bmiValue < 30):
        return (
          {
            message: 'overweight',
            color: 'darkgreen'
          }
        )
      case (bmiValue < 35):
        return (
          {
            message: 'obese',
            color: 'red'
          }
        )
    }
  }
}