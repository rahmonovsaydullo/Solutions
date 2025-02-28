// var areOccurrencesEqual = function (s) {
//     let obj = {}
//     for (let i = 0; i < s.length; i++) {
//         obj[s[i]]=+1
//     }
//     console.log(obj);

// };
// (areOccurrencesEqual('abasscc'))


var addTwoPromises = async function (promise1, promise2) {
    return ( (await promise1) + (await promise2)) 
  };
  

promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)),
    promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))