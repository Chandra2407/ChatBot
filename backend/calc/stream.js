const fs = require("fs")
const path = require("path")

const filePath = path.join(__dirname, "file1.txt")
const outputFile = path.join(__dirname, "file2.txt")

const readableStream = fs.createReadStream(filePath, {
    encoding: "utf-8",
    // highWaterMark: 1 // buffer size in bytes (1 byte)
    highWaterMark: 1024 // buffer size in bytes (1 KB)
});
const writeableStream = fs.createWriteStream(outputFile)

// readableStream.on("data", (chunk) => {
//     console.log(chunk)
//     writeableStream.write(`${chunk}`)
// })



// The default buffer size for Node.js streams (like fs.createReadStream) is 64 KB (65536 bytes). This is controlled by the highWaterMark option.

// If you do not specify highWaterMark, Node.js uses this default value:


// In Node.js, there are four main types of streams:

// Readable streams – for reading data (e.g., fs.createReadStream, HTTP request).
// Writable streams – for writing data (e.g., fs.createWriteStream, HTTP response).
// Duplex streams – both readable and writable (e.g., TCP sockets).
// Transform streams – duplex streams that can modify or transform the data as it is read or written (e.g., zlib compression).



readableStream.pipe(writeableStream)

// 🔹 What is a Pipe?

// A pipe in Node.js connects the output of one stream directly into the input of another stream.

// Think of it like water pipes:

// Data flows out from one pipe (a readable stream, e.g., file input).

// It flows through the pipe and goes into another (a writable stream, e.g., file output).

// So you don’t have to manually listen for "data" events and write chunks yourself — .pipe() does that automatically.


console.log("stream")