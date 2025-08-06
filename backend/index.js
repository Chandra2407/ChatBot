const express = require("express");
const axios = require("axios");
const cors = require("cors");

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

