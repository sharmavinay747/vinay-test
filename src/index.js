let users = require("./users.json");


const calBMI = require("./calBMI")

const calBmiCategory = require("./calBmiCategory")
const calHealthRisk = require("./calHealthRisk");
const countPeopeWithCategory = require("./countPeopeWithCategory");

/**
 * 1) Calculate the BMI (Body Mass Index) using Formula 1, BMI Category and Health
    risk from Table 1 of the person and add them as 3 new columns
 */
users.forEach((user, index) => {
    user.bmi = calBMI(user);
    user.bmiCategory = calBmiCategory(user);
    user.healthRisk = calHealthRisk(user);
})

console.log("users table", users);

/**
 * 2) Count the total number of overweight people using ranges in the column BMI
    Category of Table 1, check this is consistent programmatically and add any other
    observations in the documentation
 */
let count = countPeopeWithCategory(users, "Overweight");
console.log("Count the total number of overweight people", count);