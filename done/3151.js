let numbers = [4, 3, 1, 6]
isArraySpecial = function (nums) {
    if (nums.length == 1) return true
    for (let i = 0; i < nums.length - 1; i++) {
        if ((nums[i] % 2 === 0 && nums[i + 1] % 2 === 0) || (nums[i] % 2 !== 0 && nums[i + 1] % 2 !== 0)) return false
    } return true
}





console.log(isArraySpecial(numbers));
