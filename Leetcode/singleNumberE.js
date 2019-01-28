// Code by Jeff "Tan" Bullock 
// @TheTanBull

var singleNumber = function(nums) {
  var hashTable = new Map;
  var singleNum;
  for(let i = 0; i < nums.length; i++){
      if(hashTable.has(nums[i])){
          hashTable.delete(nums[i]);
      } else {
          hashTable.set(nums[i]);
      }
  }  
  hashTable.forEach(function(value, key){
      singleNum = key;
  });
  console.log(singleNum);
  return singleNum;
};

singleNumber([2,2,1]);