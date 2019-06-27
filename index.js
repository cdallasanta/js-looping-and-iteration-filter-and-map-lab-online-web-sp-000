// Code your solution here:
function driversWithRevenueOver(driversArr, num) {
  return driversArr.filter(function(driverObj) {
    return driverObj.revenue > num;
  });
};

function driverNamesWithRevenueOver(driversArr, num) {
  const newArr = driversWithRevenueOver(driversArr, num);
  return newArr.map(function(driverObj){
    driverObj.name;
  });
};
