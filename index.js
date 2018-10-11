// should return a new array containing the first two drivers from the passed-in array
// should be assigned to a constant
const returnFirstTwoDrivers = function (arr) {
  return arr.slice(0,2);
};

// should return an array of the last two drivers
// should be assigned to a constant
const returnLastTwoDrivers = function (arr) {
  return arr.slice(-2);
};

// has the `returnFirstTwoDrivers` function as its first element
// has the `returnLastTwoDrivers` function as its last element
// allows us to invoke either function from the array
const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

// returns a function
// should multiply a given value using the created multiplier
const createFareMultiplier = function (multiplier) {
  return function (value) {
    return value * multiplier;
  };
};

// is a function
// doubles fares
const fareDoubler = function (fare) {
  return fare * 2;
};
// *** alternative solution using createFareMultiplier() --> createFareMultiplier(2);

// is a function
// triples fares
const fareTripler = createFareMultiplier(3);

// returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
// returns the last two drivers when passed returnLastTwoDrivers() as the second argument
const selectDifferentDrivers = function (driversArray, selectFn) {
  return selectFn(driversArray);
};
