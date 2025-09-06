const express = require("express");
const axios = require("axios");
const cors = require("cors");
const http = require("http")
const fs = require("fs")
const path = require("path")

const crypto = require("./calc/thread")

// require("./calc/buffer")

// require("./calc/fs")
// require("./calc/fspromise")
// require("./calc/stream")

// require("./calc/sub") //module caching
// const add = require("./calc/add")
// console.log(require.resolve("./calc/sub"))
// delete require.cache[require.resolve("./calc/sub")]; //removing caching so that require will return new value
// require("./calc/sub")

const EventEmitter = require("events");
const { default: Pizza } = require("./calc/Pizza");
const emitter = new EventEmitter()

emitter.on("order-pizza", (size, topping) => {
    console.log(`order received ${size} ${topping}`)
})

// emitter.on("order-pizza", (size, topping) => {
//     console.log(`order received again ${size} ${topping}`)
// })


// console.log("events are non blocking")

// emitter.emit("order-pizza", "large", "paneer")
// emitter.emit("order-pizza", "small", "paneer")

const pizzashop = new Pizza()
pizzashop.on("order-pizza", (size, topping) => {
    console.log(`order received for ${size} ${topping}`)
})

// pizzashop.order("small", "beans")


const app = express();
app.use(express.json());
app.use(cors());

app.post("/chat", async (req, res) => {
    const { prompt } = req.body;
    try {
        const response = await axios.post(
            "http://ollama:11434/api/generate",
            { model: "phi3:mini", prompt },
            { responseType: "stream" }
        );

        let fullResponse = "";

        response.data.on("data", (chunk) => {
            try {
                const lines = chunk.toString().split("\n").filter(Boolean);
                for (const line of lines) {
                    const parsed = JSON.parse(line);
                    if (parsed.response) {
                        fullResponse += parsed.response;
                    }
                }
            } catch (parseError) {
                console.error("Chunk parse error:", parseError.message);
            }
        });

        response.data.on("end", () => {
            res.json({ response: fullResponse });
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Failed to generate response." });
    }
});

app.get("/posts", async (req, res) => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch test posts." });
    }
});

app.listen(3000, () => console.log("Backend running on port 3000"));

const nodeServer = http.createServer((req, res) => {

    const data = {
        test: "test"
    }

    const file = path.join(__dirname, "calc", "index.html")
    // const html = fs.readFileSync(file, "utf-8")

    res.writeHead(200, { "content-type": "text/html" })
    // res.end(JSON.stringify(data))
    // res.end(html)
    const readableStream = fs.createReadStream(file, "utf-8")
    readableStream.pipe(res)
    // readableStream.on("data", (chunk) => {
    //     res.write(chunk)
    // })
    // readableStream.on("end", () => {
    //     res.end()
    // })
})

// nodeServer.listen(3000, () => {
//     console.log("node server running on port 3001")
// })
