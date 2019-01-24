// Code by Jeff "Tan" Bullock 
// @TheTanBull

var findMedianSortedArraysFirst = function(nums1, nums2) {
    var leftIndex1 = 0, rightIndex1, med1, med2, count, leftIndex2 = 0, rightIndex2;

    rightIndex1 = nums1.length - 1;
    rightIndex2 = nums2.length - 1; 

    while(rightIndex1 - leftIndex1 > 1 || rightIndex2 - leftIndex2 > 1){
        med1 = Math.ceil((rightIndex1 + leftIndex1) / 2);
        med2 = Math.ceil((rightIndex2 + leftIndex2) / 2);
        if(nums1[med1] > nums2[med2]){
            leftIndex2 = med2;
            rightIndex1 = med1;
        }
        if(nums2[med2] > nums1[med1]){
            leftIndex1 = med1;
            rightIndex2 = med2;
        }
        console.log("Array1 Left: " + leftIndex1 + " RIGHT: " + rightIndex1);
    }
    // if(med1 === 1){
    //     med1 = 0;
    // }
    // if(med2 === 1){
    //     med2 = 0;
    // }
    console.log("med1: " + med1 + " med2: " + med2);
    if((nums1.length + nums2.length) % 2 === 1){
        if(nums1[med1] >= nums2[med2]){
            console.log(nums1[med1]);
            return nums1[med1];
        }else{
            console.log(nums2[med2]);
            return nums2[med2];
        }
        console.log("odd: " + (nums1[med1] + nums2[med2]) / 2);
    }
    if((nums1.length + nums2.length) % 2 === 0){
        console.log("Even: " + (nums1[med1] + nums2[med2]) / 2);
        return (nums1[med1] + nums2[med2]) / 2;
    }
    console.log("Median 1: " + med1 + " Median 2: " + med2);
    console.log((nums1[med1] + nums2[med2]) / 2);
}

//************************************************************/

var findMedianSortedArrays = function(nums1, nums2) {
    var leftIndex1 = 0, rightIndex1, med1, med2, leftCount = 0, rightCount = 0, totalCount, leftIndex2 = 0, rightIndex2;

    rightIndex1 = nums1.length - 1;
    rightIndex2 = nums2.length - 1; 
    totalCount = nums1.length + nums2.length;

    while(Math.floor(totalCount/2) - 1 > leftCount && Math.floor(totalCount/2) - 1 > rightCount){
        med1 = Math.floor((rightIndex1 + leftIndex1) / 2);
        med2 = Math.floor((rightIndex2 + leftIndex2) / 2);
        if(nums1[med1] > nums2[med2]){
            rightCount += rightIndex1 - med1;
            leftCount += med2 - leftIndex2;
            leftIndex2 = med2;
            rightIndex1 = med1;
        }
        if(nums2[med2] > nums1[med1]){
            rightCount += rightIndex2 - med2;
            leftCount += med1 - leftIndex1;
            leftIndex1 = med1;
            rightIndex2 = med2;
        }
    }
    if(totalCount % 2 === 0){
        if(med1 === 0 || med2 === 0){

        }
        if(leftCount > rightCount){

        }
    }
    console.log("Median 1: " + med1 + " Median 2: " + med2);
    console.log("Left Count: " + leftCount + " Right Count: " + rightCount);
}
findMedianSortedArrays([1,2,4,5], [3, 4, 5, 6, 7]);