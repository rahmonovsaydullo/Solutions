// https://leetcode.com/problems/counter/?envType=study-plan-v2&envId=30-days-of-javascript

function createCounter(n) {
    let current = n
    return function () {
        return current++
    }
}

const counter = createCounter(5)


