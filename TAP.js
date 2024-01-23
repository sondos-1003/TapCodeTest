// JavaScript source code
function findMissingNumber(nums) {
    const n = nums.length;

    // Calculate the sum of numbers from 0 to n using the formula (n * (n + 1)) / 2
    const expectedSum = (n * (n + 1)) / 2;

    // Calculate the sum of the numbers in the given array
    const actualSum = nums.reduce((sum, num) => sum + num, 0);

    // The missing number is the difference between the expected sum and the actual sum
    const missingNumber = expectedSum - actualSum;

    return missingNumber;
}

// Example usage:
const nums1 = [3, 0, 1];
console.log(findMissingNumber(nums1)); // Output: 2

const nums2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(findMissingNumber(nums2)); // Output: 8

const nums3 = [0, 1];
console.log(findMissingNumber(nums3)); // Output: 2
