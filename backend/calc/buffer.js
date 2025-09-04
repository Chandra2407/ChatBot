const fs = require("fs");
const path = require("path")
console.log("buffer")
// Allocate a buffer of size 10 bytes (filled with zeros)
const buf = Buffer.alloc(10)
console.log(buf)
// Unsafe allocation (might contain old memory values)
const buf2 = Buffer.allocUnsafe(10);
console.log(buf2.toJSON())

const buf3 = Buffer.from([72, 101, 108, 108, 111]);
console.log(buf3.toString()); // "Hello

// From string
const buf4 = Buffer.from("Hello World", "utf-8");
console.log(buf4); // <Buffer 48 65 6c 6c 6f ...>

buf.write("Hi");
console.log(buf.toString()); // "Hi"

// Access bytes directly
console.log(buf[0]); // 72 ('H')
console.log(buf[1]); // 105 ('i')

// Modify directly
buf[0] = 65; // ASCII code for 'A'

console.log(buf.toString()); // "Ai"

buf.write("Node.js")

console.log(buf.toString("utf-8")); // "Node.js"
console.log(buf.toString("hex"));   // 4e6f64652e6a73
console.log(buf.toString("base64")); // Tm9kZS5qcw==

// 🔹 Buffer Methods

// Buffer.alloc(size) → Creates new buffer filled with zeros.

// Buffer.from(data) → Creates buffer from array/string.

// buf.toString([encoding]) → Converts buffer to string.

// buf.slice(start, end) → Returns a new buffer view (shares memory).

// buf.copy(targetBuf) → Copies data into another buffer.

// buf.length → Size of buffer in bytes.

console.log(buf.length)

const filePath = path.join(__dirname, "input.txt"); // absolute path
console.log(__dirname, __filename, filePath, "file")
const readStream = fs.createReadStream(filePath);

readStream.on("data", (chunk) => {
    console.log("Received chunk:", chunk.length, "bytes");
    console.log("As string:", chunk.toString().slice(0, 50), "...");
});

readStream.on("end", () => {
    console.log("Finished reading file.");
});