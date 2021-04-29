module.exports = (user) => {
    let { bmi } = user;
    switch (true) {
        case (bmi < 18.5):
            return "Underweight"
        case (bmi < 25):
            return "Normal weight"
        case (bmi < 30):
            return "Overweight"
        case (bmi < 35):
            return "Moderately obese"
        case (bmi < 40):
            return "Severely obese"
        case (bmi > 40):
            return "Very severely obese"
        default:
            return "";
    }
}