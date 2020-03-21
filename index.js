// Code your solution in this file!
const returnFirstTwoDrivers = function( array ) {
  let first_two = array.slice(0,2)
  return first_two;
};

const returnLastTwoDrivers = function( array ) {
  let last_two = array.slice(-2)
  return last_two;
};
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplyValue) {
  return function (value) {
    return multiplyValue * value;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, whichDrivers) {
  return whichDrivers(drivers);
};
