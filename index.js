// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  newArray = [];
  for (let i = 0; i < 2; i++) {
    newArray.push(drivers[i])
  }
  return newArray;
}

const returnLastTwoDrivers = function (drivers) {
  newArray = [];
  for (let i = drivers.length  - 2; i < drivers.length; i++) {
    newArray.push(drivers[i])
  }
  return newArray;
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
  return function (fare){ return fare * int; }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(arrayOfDrivers, func){
  return func(arrayOfDrivers);
}

let x;
