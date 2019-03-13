// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(drivers.length - 2);
};

const selectingDrivers = [];
selectingDrivers[0] = returnFirstTwoDrivers;
selectingDrivers[1] = returnLastTwoDrivers;

const createFareMultiplier = function(n){
  return function(fare){
    return fare * n;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);


const fetchSpecifiedDrivers = function(arrayOfDrivers, func){
  return func(arrayOfDrivers);
};
