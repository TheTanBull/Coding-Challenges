// Code by Jeff "Tan" Bullock 
// @TheTanBull

//Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

var moveZeroes = function(nums) {
  let count = nums.length;
  for(let i = 0; i < count; i++){
      if(nums[i] === 0){
          nums.push(nums.splice(i, 1)[0]);
          count--;
          i--;
      }
  }  
  console.log(nums);
};

moveZeroes([0,1,0,3,12]);