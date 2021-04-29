module.exports = (user) => {
    let { bmi } = user;
    switch (true) {
        case (bmi < 18.5):
            return "Malnutrition risk"
        case (bmi < 25):
            return "Low risk"
        case (bmi < 30):
            return "Enhanced risk"
        case (bmi < 35):
            return "Medium risk"
        case (bmi < 40):
            return "High risk"
        case (bmi > 40):
            return "Very high risk"
        default:
            return "";
    }
};
