// Code your solution in this file!
// Declare variable using const
const returnFirstTwoDrivers = function(drivers) {
    // Return a new array containing the first two drivers
    return drivers.slice(0, 2);
}

// Declare variable using const
const returnLastTwoDrivers = function(drivers) {
    // Return a new array containing the last two drivers
    return drivers.slice(2, 4);
}

// Invoke either frunction from the array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Multiply a given value using the created multiplier
const createFareMultiplier = function(fareMultiplier) {
    return function(fare) {
        return fare * fareMultiplier;
    }
}
// Accepts a fare as its lone argument and doubles it
const fareDoubler = createFareMultiplier(2);

// Accepts a fare as its lone argument and triples it
const fareTripler = createFareMultiplier(3);

// Returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
function selectDifferentDrivers(drivers, arrayOfDrivers) {
    return arrayOfDrivers(drivers);
}