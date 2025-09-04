const fs = require("fs/promises")
const path = require("path")

const filePath = path.join(__dirname, "input.txt")
const outputFilePath = path.join(__dirname, "output.txt")


fs.readFile(filePath, "utf-8")
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    })

console.log("fspromise")