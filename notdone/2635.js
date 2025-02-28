function doubled(arr, fn) {
    let newArr = []
    for (const element of arr) {
        newArr.push(fn(element))
    }
    return newArr
}

console.log(doubled([2, 3, 4, 5, 6], (x) => x * 2));
