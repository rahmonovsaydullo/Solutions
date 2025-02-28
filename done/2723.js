var addTwoPromises = async function (promise1, promise2) {
    const [v1, v2] = await (Promise.all([promise1,promise2]))
    return v1 + v2
};




console.log(addTwoPromises(
    Number(promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20))),
    Number(promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60)))));
