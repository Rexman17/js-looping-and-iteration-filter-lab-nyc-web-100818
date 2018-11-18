// Code your solution in this file
function findMatching(drivers, string) {
  const array = [];
  for (const driver of drivers) {
    if (driver.toLowerCase() === string.toLowerCase()) {
      array.push(driver);
    }
  }
  return array;
}

function fuzzyMatch(drivers, lettersString) {
  const array = [];
  for (const driver of drivers) {
    if (driver.startsWith(lettersString)) {
      array.push(driver);
    }
  }
  return array;
}

function matchName(drivers, string) {
  return drivers.filter(function (driver) { return driver['name'] === string});
}

// Write matchName - This function takes an array of drivers and a string as arguments. In this function, each element of the drivers array is a JavaScript object that has a property of name. The function should return each element whose name property matches the provided string argument.
