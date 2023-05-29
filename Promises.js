// let promise = new Promise(function (resolve, reject) {
//     let x = true
//     if (x) {
//         resolve("X gives true boolean value")
//     }
//     else {
//         reject("X gives false boolean value")
//     }
// })
// promise.then(
//     function (value) {
//         console.log(value)
//     },
//     function (error) {
//         console.log(error)
//     }
// )
let promise = new Promise(resolve => {
    let x = true
    if (x) {
        resolve("X gives true boolean value")
    }
})
promise.then(value => {console.log(value)})