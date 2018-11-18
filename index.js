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

// alternative: function findMatching (list, name) {
//   return list.filter(function (driverName) {
//     return driverName.toLowerCase() === name.toLowerCase();
//   });
// }
//
// function fuzzyMatch(drivers, lettersString) {
//   const array = [];
//   for (const driver of drivers) {
//     if (driver.startsWith(lettersString)) {
//       array.push(driver);
//     }
//   }
//   return array;
// }

function fuzzyMatch(drivers, letters) {
  return drivers.filter(function (drivers) { return driver.startsWith(letters)});
}

function matchName(drivers, string) {
  return drivers.filter(function (driver) { return driver['name'] === string});
}
