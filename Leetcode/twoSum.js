// Code by Jeff "Tan" Bullock 
// @TheTanBull

//BruteForce for-loop
var twoSumBF = function(nums, target) {
    for(var i = 0; i < nums.length - 1; i++){
        for(var j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i, j];
            }
        }
    }
}

/***************************************** */

//Map Solution

var twoSum = function(nums, target){
    var valueMap = new Map();
    var sums = [];

    for(var i = 0; i < nums.length; i++){      
        var targetDifference = target - nums[i];

        if(valueMap.get(targetDifference) !== undefined){
            sums.push(valueMap.get(targetDifference));
            sums.push(i);
            return sums;
        }
        valueMap.set(nums[i], i);
    }

}

console.log(twoSum([2, 7, 11, 15], 9));
