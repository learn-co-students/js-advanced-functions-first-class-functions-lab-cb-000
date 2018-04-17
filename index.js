// Code your solution in this file!
const returnFirstTwoDrivers = function(list) {
  return list.slice(0,2)
}

const returnLastTwoDrivers = function(list) {
  return list.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
  return function (num) {
    return num * multiplier
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(list, func) {
  return func(list)
}
