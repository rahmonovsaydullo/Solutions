var addTwoPromises = async function (promise1, promise2) {
    return promise1 + promise2
};




console.log(addTwoPromises(
    Number(promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20))),
    Number(promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60)))));
