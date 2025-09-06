const crypto = require("crypto")

// process.env.UV_THREADPOOL_SIZE = 5 // can be used to set thread pool size

const start = Date.now()
// crypto.pbkdf2Sync("password", "salt", 10000, 512, "sha512") // runs on main thread
// crypto.pbkdf2Sync("password", "salt", 10000, 512, "sha512")

for (let i = 0; i < 6; i++) {
    crypto.pbkdf2("password", "salt", 10000, 512, "sha512", () => {
        console.log(`hash ${i + 1}`, Date.now() - start)
    }) // each block runs on separate thread
}

console.log("hash", Date.now() - start)

// Default size: 4 threads
// So if you do 10 simultaneous file reads, only 4 will run in parallel; the rest wait in a queue.

console.log("thread")

// console.log(crypto.pbkdf2Sync("password", "salt", 10000, 512, "sha512"))


/**
 * Sorts an array using the Bubble Sort algorithm.
 * @param {Array<number>} arr The array to sort.
 * @returns {Array<number>} The sorted array.
 */
const bubblesort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}