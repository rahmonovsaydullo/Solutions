var createCounter = function (init) {
    let num = init
    return {
        increment: () => {
            return num = num + 1
        },
        decrement: () => {
            return num = num - 1
        },
        reset: () => {
            return  num = init
        }
    }
};


const counter = createCounter(5)
counter.increment()
counter.decrement()
counter.reset()



// Optimized version
var createCounter = function (init) {
    let num = init
    return {
            increment: () =>  ++num,
            decrement: () =>  --num,
            reset: () =>  num = init
         }
};
