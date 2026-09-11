/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    for (let i = 0; i < nums.length; i++){
        for (let j = 0; j < nums.length; j++){

            if (i == j){
                continue;
            }

            currentSum = nums[i] + nums[j];
            if (currentSum === target){
                return [i, j];
            }

        }
    }
};