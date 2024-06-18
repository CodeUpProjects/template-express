const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hello World"
    })
})

app.listen(8080, () => {
    console.log("Server ready on 127.0.0.1:8080")
})