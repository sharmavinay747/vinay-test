var assert = require('assert');
var calBMI = require("../src/calBMI")
var calBmiCategory = require("../src/calBmiCategory")
var calHealthRisk = require("../src/calHealthRisk")
var countPeopeWithCategory = require("../src/countPeopeWithCategory")

describe(' BMI Calculater', function () {
  describe('#it can calculate the BMI for the of person', function () {
    describe('#Create new Person with overwight properties', function () {
      var person = {
        "Gender": "Male",
        HeightCm: 167,
        WeightKg: 82
      };
      describe('#calculate the BMI for the of person using function calBMI and asgin this value to person', function () {
        person.bmi = calBMI(person)
        it('should return 32.8 bmi', function () {
          assert.equal(person.bmi,  29.4);
        });
        describe('#Calculate the BMI category for this persion and assign this value to person', function () {
          person.bmiCategory = calBmiCategory(person);
          it('should be equal to person bmi category value Overweight', function () {
            assert.equal(person.bmiCategory, "Overweight");
          });
        });
        describe('#Calculate the BMI health risk for this persion and assign this value to person', function () {
          person.bmiHealthRisk = calHealthRisk(person);
          it('should be equal to person bmi category value Enhanced risk', function () {
            assert.equal(person.bmiHealthRisk, "Enhanced risk");
          });
        });
        describe('#Calculate the count of overweight person', function () {
          var count = countPeopeWithCategory([person],"Overweight");
          it('should be equal to 1', function () {
            assert.equal(count, 1);
          });
        });


      });
    });
  });
});