const add = function(first,second) {

  return first + second;
	
};

const subtract = function(first,second) {
	return first - second;
};

const sum = function(nums) {

  let sum = 0;

  for(let i=0; i<nums.length; i++){
    sum += nums[i];
  }

  return sum;
	
};

const multiply = function(...nums) {

  let solution = 1;

  for(let i =0; i<nums.length; i++){
    solution = solution * nums[i]
  }

  return solution;

};

const power = function(x,y) {

  if(y === 1){
    return x;
  }
  else{
     return (x * power(x,y-1));
  }
};

const factorial = function(x) {

  if(x === 0 || x===1){
    return 1;
  }
  else{
    return(x * factorial(x - 1));
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
