// https://leetcode.com/problems/sleep


async function sleep(millis) {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(millis)
        }, millis);
    })
        .then((resolve) => {
            console.log(resolve);
        })
        .catch((err) => console.log(err)
        )
}
sleep(100)


// Optimized version:

const sleep = (millis) => new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, millis);
});

