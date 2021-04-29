module.exports = (user) => {
    let height = parseFloat(user.HeightCm) / 100;
    let weight = parseFloat(user.WeightKg);
    let bmi = weight / (height * height);
    return parseFloat(bmi.toFixed(1))
}