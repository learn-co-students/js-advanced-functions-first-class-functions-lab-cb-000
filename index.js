
////// Yes, I'm practicing arrow function syntax !!!!!


/* const returnFirstTwoDrivers = function(driversArray) {
  return driversArray.slice(0,2);
}; */

const returnFirstTwoDrivers = driversArray => driversArray.slice(0,2);

/* const returnLastTwoDrivers = function(driversArray) {
  return driversArray.slice(-2);
}; */

const returnLastTwoDrivers = driversArray => driversArray.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

/* const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}; */

const createFareMultiplier = multiplier => fare => fare * multiplier;

/* const fareDoubler = function(fare) {
  return createFareMultiplier(2)(fare);
}; */

const fareDoubler = fare => createFareMultiplier(2)(fare);

/* const fareTripler = function(fare) {
  return createFareMultiplier(3)(fare);
}; */

const fareTripler = fare => createFareMultiplier(3)(fare);

/* const selectDifferentDrivers = function(driversArray, returnedDrivers) {
  return returnedDrivers(driversArray);
}; */

const selectDifferentDrivers = (driversArray, returnedDrivers) => returnedDrivers(driversArray);