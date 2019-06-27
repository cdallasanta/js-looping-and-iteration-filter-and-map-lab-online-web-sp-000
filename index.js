// Code your solution here:
function driversWithRevenueOver(driversArr, num) {
  return driversArr.filter(function(driverObj) {
    return driverObj.revenue > num;
  });
};

function driverNamesWithRevenueOver(driversArr, num) {
  return driversArr.map(function(driverObj){
    if (driverObj.revenue > num){
      return driverObj.name;
    } else {
      return null;
    };
  });
};
