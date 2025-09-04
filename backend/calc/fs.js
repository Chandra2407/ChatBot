const fs = require("fs")
const path = require("path")

const filePath = path.join(__dirname, "input.txt")

//this is sync and blocking
const file = fs.readFileSync(filePath, "utf-8")

console.log(file)

//this is async and non blocking
fs.readFile(filePath, "utf-8", (error, data) => {
    if (error) console.log(error)
    else console.log(data)
})

console.log("test")

const outputFilePath = path.join(__dirname, "output.txt")
fs.writeFileSync(outputFilePath, "hey mannn")

fs.writeFile(outputFilePath, "\nasync write file", { flag: "a" }, (error) => {
    if (error) console.log(error)
    else console.log("file written")
})