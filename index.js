// Code your solution here:
function driversWithRevenueOver(driversArr, num) {
  return driversArr.filter(function(driverObj) {
    return driverObj.revenue > num;
  });
};

function driverNamesWithRevenueOver(driversArr, num) {
  debugger;
  const newArr = driversArr.filter(function(driverObj){
    driverObj.revenue > num;
  });
  return newArr.map(function(driverObj){
    driverObj.name;
  });
};
