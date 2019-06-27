// Code your solution here:
function driversWithRevenueOver(driversArr, num) {
  return driversArr.filter(function(driverObj) {
    return driverObj.revenue > num;
  });
};

function driverNamesWithRevenueOver(driversArr, num) {
  const newArr = driversWithRevenueOver(driversArr, num);
  return newArr.map(function(driverObj){
    return driverObj.name;
  });
};

function exactMatch(arr, matchObj){
  return arr.filter(function(driver){
    return driver.matchObj.keys[0] === 
  });
};
